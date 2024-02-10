import './app-info.css'

const AppInfo = (prop) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании Meta</h1>
            <h2>Общее число сотрудников: {prop.employeesCount}</h2>
            <h2>Премию получат: {prop.increaseCount}</h2>
        </div>
    )
}

export default AppInfo;