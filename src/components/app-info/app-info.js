
import './app-info.css';

const AppInfo = ({increased, employees, rised}) => {
    return (
        <div className="app-info">
            <h1>Employee accounting at ArtSoftware</h1>
            <h2>Total number of employees: {employees}</h2>
            <h2>The increase will be received by: {increased}</h2>
            <h2>Employees up for rise: {rised}</h2>
        </div>
    )
}

export default AppInfo;