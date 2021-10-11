import React from 'react'
import Input from '../../../components/Input'
import { useHistory } from "react-router-dom";

import { GlobalContext } from "../../../store/GlobalState";


const Filters = () => {
    let history = useHistory();

    const { filterByName, filters, sorts } = React.useContext(GlobalContext);

    var address = "";

    var firstArg = false;
    //  firstArg used for use ? or & in url parameters

    if (sorts.changer_name && sorts.changer_name !== "") {
        address = `${firstArg ? "&" : "?"}sort_changer_name=${sorts.changer_name}`
        firstArg = true;
    }
    if (sorts.date && sorts.date !== "") {
        address = `${firstArg ? "&" : "?"}sort_date=${sorts.date}`
        firstArg = true;
    }

    if (sorts.title && sorts.title !== "") {
        address = `${firstArg ? "&" : "?"}sort_title=${sorts.title}`
        firstArg = true;
    }

    if (sorts.field && sorts.field !== "") {
        address = `${firstArg ? "&" : "?"}sort_field=${sorts.field}`
        firstArg = true;
    }

    if (sorts.new_field && sorts.new_field !== "") {
        address = `${firstArg ? "&" : "?"}sort_new_field=${sorts.new_field}`
        firstArg = true;
    }
    if (sorts.old_field && sorts.old_field !== "") {
        address = `${firstArg ? "&" : "?"}sort_old_field=${sorts.old_field}`
        firstArg = true;
    }

    // filters

    if (filters.changer_name && filters.changer_name !== "") {
        address += `${firstArg ? "&" : "?"}changer_name=${filters.changer_name}`
        firstArg = true;
    }

    if (filters.date && filters.date !== "") {
        address += `${firstArg ? "&" : "?"}date=${filters.date}`
        firstArg = true;
    }

    if (filters.field && filters.field !== "") {
        address += `${firstArg ? "&" : "?"}field=${filters.field}`
        firstArg = true;
    }
    if (filters.title && filters.title !== "") {
        address += `${firstArg ? "&" : "?"}title=${filters.title}`
        firstArg = true;
    }


    history.push(address);



    return (
        <div>
            <div className="changes-list-filters flex ">
                <Input value={filters.changer_name} handleChange={(e) => { filterByName('changer_name', e.target.value) }} label="نام تغییر دهنده" />
                <Input value={filters.date} handleChange={(e) => { filterByName('date', e.target.value) }} label="تاریخ" />
                <Input value={filters.title} handleChange={(e) => { filterByName('title', e.target.value) }} label="نام آگهی" />
                <Input value={filters.field} handleChange={(e) => { filterByName('field', e.target.value) }} label="فیلد" />
            </div>
        </div>
    )
}



export default Filters
