import React from 'react';
import Header from '../others/Header';
import TaskListNumbers from '../others/TaskListNumbers';
import Tasklist from '../Tasklist/Tasklist';
const EmployeeDashboard = (props) => {
    
    return (
        <div className='bg-[#1c1c1c] h-screen'>
            <Header data={props.data} changeuser={props.changeuser}/>
            <TaskListNumbers data={props.data}/>
            <Tasklist data={props.data}/>
        </div>
    );
};

export default EmployeeDashboard;