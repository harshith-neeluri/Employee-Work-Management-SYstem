import React from 'react';
import Header from '../others/Header';
import CreateTask from '../others/CreateTask';
import Alltask from '../others/Alltask';

const AdminDashboard = (props) => {
    return (
        <div className='h-[100vh]'>
           <Header data={props.data} changeuser={props.changeuser} />
           <CreateTask />
           <Alltask  data={props.data} />
        </div>
    );
};

export default AdminDashboard;