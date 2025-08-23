import React from 'react';

const FailedTask = ({data}) => {
    return (
        <div>
             <div className='flex-shrink-0 h-full w-[300px] bg-green-500 rounded-xl p-4'>
                <h2 className="font-bold text-lg">{data.category}</h2>
                <h3 className="text-sm text-red-900">{data.date}</h3>
                <p className="mt-2 pt-10">{data.taskDescription}</p>
                <button className='bg-red-900 mt-3 p-3 rounded'>Failed Task</button>
            </div>
            
        </div>
    );
};

export default FailedTask;