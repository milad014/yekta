import React from 'react'
import PropTypes from 'prop-types'
import data from '../../../../data';
import { shuffle } from '../../../../utils/helpers'
import { BinarySearchTree } from '../../../../utils/BinarySearchTree';
import { GlobalContext } from "../../../../store/GlobalState";



const ListChangesContent = (props) => {
    const { filters, sorts } = React.useContext(GlobalContext);
    // for selection list
    const [selections,setSelections]=React.useState([])

    // get selections item from localStorage
    React.useEffect(() => {
        if(localStorage.getItem('selections'))
        setSelections(JSON.parse(localStorage.getItem('selections')))
    }, []);

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
    // const bst = new BinarySearchTree();
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
    const handleSelection = (id) => {
        console.log('selections')
        console.log(selections)
        const flag=selections.some((item)=>{
            return item ===id
        })
        if(!flag){
            setSelections([...selections,id])
            localStorage.setItem('selections', JSON.stringify([...selections,id]));
        }
        else {
            setSelections(selections.filter((item)=>{return item !=id}))
            localStorage.setItem('selections', JSON.stringify(selections.filter((item)=>{return item !=id})));

        }
    }

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
                        <td onClick={() => handleSelection(item.id)} className={`text-center ${selections.length>0 && selections.some((select)=>{return select ===item.id}) ? "text-red":"text-gray"}  cursor-pointer padding-x-md except-me`}>*</td>
                    </tr>
                )
            }
            )}
            {(!finalListAfterSortAndFilter.length) && <div className="padding-top-lg  ">
                اطلاعاتی یافت نشد
            </div>}
        </>
    )
}



ListChangesContent.propTypes = {
    props: PropTypes
}


export default ListChangesContent
