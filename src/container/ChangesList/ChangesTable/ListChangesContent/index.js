import React from 'react'
import PropTypes from 'prop-types'
import data from '../../../../data';
import { GlobalContext } from "../../../../store/GlobalState";



const ListChangesContent = (props) => {
    const { filters, sorts } = React.useContext(GlobalContext);

    const getDescAndAscList = (urlName, name, listFiltered) => {
        if (sorts[`${urlName}`] === "ASC") {
            return listFiltered.sort(function (a, b) {
                var textA = a[`${name}`].toUpperCase();
                var textB = b[`${name}`].toUpperCase();
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            })
        }
        else if (sorts[`${urlName}`] === "DESC")
            return listFiltered.sort(function (a, b) {
                var textA = a[`${name}`].toUpperCase();
                var textB = b[`${name}`].toUpperCase();
                return (textA > textB) ? 0 : 1;
            });
        else
            return listFiltered;
    }



    var listFiltered = data.filter(item => {
        return (
            item.name.includes(filters.changer_name ? filters.changer_name : "") === true &&
            item.date.includes(filters.date ? filters.date : "") === true &&
            item.title.includes(filters.title ? filters.title : "") === true &&
            item.field.includes(filters.field ? filters.field : "") === true

        )
    })

    // check asc or desc
    var finalListAfterSortAndFilter = getDescAndAscList('changer_name', 'name', listFiltered)
    finalListAfterSortAndFilter = getDescAndAscList('title', 'title', listFiltered)
    finalListAfterSortAndFilter = getDescAndAscList('field', 'field', listFiltered)
    finalListAfterSortAndFilter = getDescAndAscList('date', 'date', listFiltered)
    finalListAfterSortAndFilter = getDescAndAscList('next_field', 'next_field', listFiltered)
    finalListAfterSortAndFilter = getDescAndAscList('old_field', 'old_field', listFiltered)


    return (
        <>
            {finalListAfterSortAndFilter?.slice(0, 20).map((item) => {
                return (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.date}</td>
                        <td>{item.title}</td>
                        <td>{item.field}</td>
                        <td>{item.old_value}</td>
                        <td>{item.new_value}</td>
                    </tr>
                )
            }
            )}
        </>
    )
}



ListChangesContent.propTypes = {
    props: PropTypes
}


export default ListChangesContent
