import React from 'react';

const AcceptTask = ({data}) => {
    return (
        <div>
           <div className='flex-shrink-0 h-full w-[300px] bg-yellow-500 rounded-xl p-4'>
                <h2 className="font-bold text-lg">{data.category}</h2>
                <h3 className="text-sm text-green-400">{data.date}</h3>
                <p className="mt-2 pt-10">{data.taskDescription}</p>
                
                <button className='bg-green-400 mt-3 p-3 rounded'>Accepted Task</button>

            
            </div>
            
        </div>
    );
};

export default AcceptTask;