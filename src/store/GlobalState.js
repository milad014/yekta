import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'
const initialState = {
    sorts: {},
    filters: {},
}
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

// for sorts initial from url
if (params.sort_changer_name)
    initialState.sorts.changer_name = params.sort_changer_name

if (params.sort_date)
    initialState.sorts.date = params.sort_date

if (params.sort_title)
    initialState.sorts.title = params.sort_title

if (params.sort_field)
    initialState.sorts.field = params.sort_field

if (params.sort_old_field)
    initialState.sorts.old_field = params.sort_old_field


if (params.sort_new_field)
    initialState.sorts.new_field = params.sort_new_field


// for filters initial from  url
if (params.changer_name)
    initialState.filters.changer_name = params.changer_name

if (params.date)
    initialState.filters.date = params.date

if (params.title)
    initialState.filters.title = params.title

if (params.field)
    initialState.filters.field = params.field


export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {



    const [state, dispatch] = useReducer(AppReducer, initialState);

    function filterByName(name, value) {
        dispatch({
            type: 'SET_FILTER_BY_NAME',
            payload: { value, name }
        });
    };

    function sortByName(name, value) {

        dispatch({
            type: 'SET_SORT_BY_NAME',
            payload: { value, name }
        });
    };



    return (<GlobalContext.Provider value={{
        filters: state.filters,
        filterByName,
        sorts: state.sorts,
        sortByName,

    }}>
        {children}
    </GlobalContext.Provider>);
}
