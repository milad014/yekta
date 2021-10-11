import React from 'react'
import './changesTable.scss'
// import { BinarySearchTree } from '../../../utils/BinarySearchTree';
import { GlobalContext } from "../../../store/GlobalState";
import ListChangesContent from './ListChangesContent'
import { useHistory } from "react-router-dom";

const ChangesTable = props => {
    const { sortByName, sorts } = React.useContext(GlobalContext);

    let history = useHistory();



    const getNewSortValue = (name) => {
        if (history.location.search[`sort_${name}`]) {
            return "ASC";
        }
        else {
            if (sorts[`${name}`] === "ASC")   {
                return "DESC";
            }
            else if(sorts[`${name}`] === "DESC") {
                return "UNORDER";
            }
            else
            return "ASC";

        }
    }

    return (
        <div className="flex overflow-x-auto block justify-center ">
            <table className="changes-list-table w-100 padding-md">
            <tbody>
                <tr className="text-blue">

                    <th className="cursor-pointer" onClick={(e) => sortByName('changer_name', getNewSortValue('changer_name'))}>
                        { sorts.changer_name === "ASC" ? (<>↑</>) :  sorts.changer_name === "DESC" ?  (<>↓</>) :""}
                        نام تغییر دهنده

                    </th>
                    <th className="cursor-pointer" onClick={(e) => sortByName('date', getNewSortValue('date'))}>
                    { sorts.date === "ASC" ? (<>↑</>) :  sorts.date === "DESC" ?  (<>↓</>) :""}
                        تاریخ

                    </th>
                    <th className="cursor-pointer" onClick={(e) => sortByName('title', getNewSortValue('title'))}>
                    { sorts.title === "ASC" ? (<>↑</>) :  sorts.title === "DESC" ?  (<>↓</>) :""}
                        نام آگهی

                    </th>
                    <th className="cursor-pointer" onClick={(e) => sortByName('field', getNewSortValue('field'))}>
                    { sorts.field === "ASC" ? (<>↑</>) :  sorts.field === "DESC" ?  (<>↓</>) :""}
                        فیلد

                    </th>
                    <th className="cursor-pointer" onClick={(e) => sortByName('old_field', getNewSortValue('old_field'))}>
                    { sorts.old_field === "ASC" ? (<>↑</>) :  sorts.old_field === "DESC" ?  (<>↓</>) :""}
                        فیلد قدیمی

                    </th>
                    <th className="cursor-pointer" onClick={(e) => sortByName('new_field', getNewSortValue('new_field'))}>
                    { sorts.new_field === "ASC" ? (<>↑</>) :  sorts.new_field === "DESC" ?  (<>↓</>) :""}
                        فیلد جدید
                    </th>
                    <th className="except-me padd padding-x-xs bg-none">منتخب</th>
                </tr>
                <ListChangesContent />
                </tbody>
            </table>
        </div>
    )
}

ChangesTable.propTypes = {

}

export default ChangesTable
