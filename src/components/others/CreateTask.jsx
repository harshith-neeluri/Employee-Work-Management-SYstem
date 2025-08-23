import React, { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
    const CreateTask = () => {
        const [TaskTitle, setTaskTitle] = useState('');
        const [TaskDescription, setTaskDescription] = useState('');
        const [TaskDueDate, setTaskDueDate] = useState('');
        const [TaskAssignee, setTaskAssignee] = useState('');
        const [task ,setTask] = useState([]);
          const locdata = useContext(AuthContext).employees;
        
        const SubmitEvent = (e) => {
            e.preventDefault();
            setTask([...task, {
                taskTitle: TaskTitle,
                taskDescription: TaskDescription,
                taskDueDate: TaskDueDate,
                taskAssignee: TaskAssignee,
                active: false,
                newTask: true,
                completed: false,
                failed: false

               
                
            }]);
            console.log({
                taskTitle: TaskTitle,
                taskDescription: TaskDescription,
                taskDueDate: TaskDueDate,
                taskAssignee: TaskAssignee
            });
            locdata.forEach((emp) => {
                if (TaskAssignee === emp.firstName) {
                    emp.newTask += 1;
                    emp.tasks.push({
                        taskTitle: TaskTitle,
                        taskDescription: TaskDescription,
                        taskDueDate: TaskDueDate,
                        taskAssignee: TaskAssignee,
                        active: false,
                        newTask: true,
                        completed: false,
                        failed: false
                    });
                    console.log(emp);
                }
            });
            setTaskTitle('');
            setTaskDescription('');
            setTaskDueDate('');
            setTaskAssignee('');
        }

    return (
        <div className="min-h-screen flex items-center justify-center h-[60%] bg-gray-900">
            <div className="bg-gray-400 p-8 rounded-xl shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center text-black">
                     Create Task
                </h1>
                
                <form className="flex flex-col gap-4 text-black">
                    <div>
                        <label className="block mb-1 font-semibold text-black">Task Title</label>
                        <input 
                            value={TaskTitle}
                            onChange={(e)=>{
                                setTaskTitle(e.target.value);   
                            }}
                            type="text" 
                            placeholder="Enter task title"
                            className="w-full border border-gray-500 bg-gray-400 text-black placeholder-black rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" 
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-semibold text-black">Task Description</label>
                        <textarea 
                             value={TaskDescription}
                            onChange={(e)=>{
                                setTaskDescription(e.target.value);   
                            }}
                            rows="4" 
                            placeholder="Enter task description"
                            className="w-full border border-gray-500 bg-gray-400 text-black placeholder-black rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        ></textarea>
                    </div>

                    <div>
                        <label className="block mb-1 font-semibold text-black">Task Due Date</label>
                        <input 
                            value={TaskDueDate}
                            onChange={(e)=>{
                                setTaskDueDate(e.target.value);   
                            }}
                            type="date" 
                            className="w-full border border-gray-500 bg-gray-400 text-black rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-semibold text-black">Assign To</label>
                        <input 
                            type="text" 
                            value={TaskAssignee}
                            onChange={(e)=>{
                                setTaskAssignee(e.target.value);   
                            }}
                            placeholder="Enter assignee"
                            className="w-full border border-gray-500 bg-gray-400 text-black placeholder-black rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" 
                        />
                    </div>

                    <button 
                        onClick={(e)=>{
                           SubmitEvent(e)
                        }}
                        className="mt-4 bg-blue-600 text-black font-semibold py-2 rounded hover:bg-blue-700 transition-colors"
                    >
                        Create Task
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateTask;
