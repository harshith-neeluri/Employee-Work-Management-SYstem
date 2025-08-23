import React from 'react';

const NewTasklist = ({data}) => {
    return (
        <div>
            <div className='flex-shrink-0 h-full w-[300px] bg-red-500 rounded-xl p-4'>
                <h2 className="font-bold text-lg">{data.category}</h2>
                <h3 className="text-sm text-yellow-700">{data.date}</h3>
                <p className="mt-2 pt-10">{data.taskDescription}</p>
                <button className='bg-yellow-500 mt-3 p-3 rounded'>Accept Task </button>
                <button className='bg-yellow-500 ml-3 mt-3 p-3 rounded'>Reject Task</button>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default NewTasklist;