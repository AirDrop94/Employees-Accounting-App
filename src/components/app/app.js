import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {

    const data = [
            {name: 'Tony S.', salary: 1200, increase: false},
            {name: 'Walter W.', salary: 900, increase: false},
            {name: 'Robert O.', salary: 1500, increase: false},
            {name: 'John W.', salary: 1900, increase: true},
            {name: 'Dawid L.', salary: 1400, increase: false},
            {name: 'Michael K.', salary: 800, increase: false},
    ];

    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList data={data}/>
            <EmployeesAddForm/>
        </div>
    );
}

export default App;