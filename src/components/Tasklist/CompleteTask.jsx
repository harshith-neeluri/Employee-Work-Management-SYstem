import React from 'react';

const CompleteTask = ({data}) => {
    return (
        <div>
            <div className='flex-shrink-0 h-full w-[300px] bg-blue-500 rounded-xl p-4'>
                <h2 className="font-bold text-lg">{data.category}</h2>
                <h3 className="text-sm text-blue-900">{data.date}</h3>
                <p className="mt-2 pt-10">{data.taskDescription}</p>
                 <button className='bg-blue-900 mt-3 p-3 rounded'>Completed Task</button>
            </div>
            
        </div>
    );
};

export default CompleteTask;