import React from 'react';
import AcceptTask from './AcceptTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';
import NewTasklist from './NewTasklist';

const Tasklist = ({ data }) => {
    return (
        <div className='h-[55%] w-full overflow-x-auto flex items-center flex-nowrap gap-5 px-10 py-5 mt-10'>
            {data.tasks.map((task, index) => {
                if (task.active) {
                    return <AcceptTask key={index} data={task} />;
                }
                if (task.completed) {
                    return <CompleteTask key={index} data={task} />;
                }
                if (task.failed) {
                    return <FailedTask key={index} data={task} />;
                }
                if (task.newTask) {
                    return <NewTasklist key={index} data={task} />;
                }
                return null; // in case status doesn't match any
            })}
        </div>
    );
};

export default Tasklist;
