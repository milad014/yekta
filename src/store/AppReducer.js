const Reducer = (state, action) => {
    switch (action.type) {
        case "SET_FILTER_BY_NAME":
        // need refactor
        state.filters[`${action['payload'].name}`] = action['payload'].value
            return { ...state }
        case "SET_SORT_BY_NAME":
            state.sorts[`${action['payload'].name}`] = action['payload'].value

            var all_sorts = ['changer_name', 'title', 'date','field', 'new_field', 'old_field']
            //    find before sorts
            var before_sorts = all_sorts.filter((item, index) => {
                return (action['payload'].name !== item)

            })
            before_sorts.forEach((item) => {
                delete state.sorts[`${item}`]

            })
            return { ...state }

        default:
            return state;
    }
};


export default Reducer
