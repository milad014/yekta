import React from 'react';
import Filters from '../../container/ChangesList/Filters'
import ChangesTable from '../../container/ChangesList/ChangesTable'
import { GlobalProvider } from '../../store/GlobalState';
function ChangesList() {
    return (
        <div className="changes-list ">
            <GlobalProvider >
                <Filters />
                <ChangesTable />
            </GlobalProvider>
        </div>
    );
}

export default ChangesList;
