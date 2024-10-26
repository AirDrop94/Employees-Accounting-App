import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Tony Sorano', salary: 1200, increase: false, rise: false, id:1},
                {name: 'Walter White', salary: 900, increase: false, rise: false, id:2},
                {name: 'Robert Osbourne', salary: 1500, increase: false, rise: false, id:3},
                {name: 'John Wick', salary: 1900, increase: false, rise: false, id:4},
                {name: 'Michael Keaton', salary: 800, increase: false, rise: false, id:5},
            ]
        }
        this.maxId = 10;
    }

    delteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        });
    }

    addItem = (name, salary) => {
        const newItem = {
            name, 
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }));
    }

    render() {
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const rised = this.state.data.filter(item => item.rise).length;
        return (
            <div className="app">
                <AppInfo 
                    employees={employees} 
                    increased={increased} 
                    rised={rised}/>

                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>

                <EmployeesList 
                    data={this.state.data}
                    onDelete={this.delteItem}
                    onToggleProp={this.onToggleProp}/>
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        )
    }
}

export default App;