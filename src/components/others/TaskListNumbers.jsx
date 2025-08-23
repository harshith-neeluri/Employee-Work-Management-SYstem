import React from 'react';

const TaskListNumbers = ({data}) => {
    return (
        <div className='flex m-10 justify-between gap-5 screen'>
            <div className='px-9 py-6  rounded-xl w-[45%] bg-red-500 '>
                <h2 className='text-3xl font-semibold'>{data.newTask}</h2>
                <h3 className='text-xl font-medium'>New Task</h3>
            </div>
            <div className='px-9 py-6  rounded-xl w-[45%] bg-blue-500 '>
                <h2 className='text-3xl font-semibold'>{data.completed}</h2>
                <h3 className='text-xl font-medium'>Completed Task</h3>
            </div>
            <div className='px-9 py-6  rounded-xl w-[45%] bg-green-500 '>
                <h2 className='text-3xl font-semibold'>{data.failed}</h2>
                <h3 className='text-xl font-medium'>Failed Task</h3>
            </div>
            <div className='px-9 py-6  rounded-xl w-[45%] bg-yellow-500 '>
                <h2 className='text-3xl font-semibold'>{data.active}</h2>
                <h3 className='text-xl font-medium'>Active Task</h3>
            </div>
        </div>
    );
};

export default TaskListNumbers;