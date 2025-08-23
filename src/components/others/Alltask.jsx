import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import EmployeeDashboard from '../DashBoard/EmployeeDashboard';

const Alltask = () => {
    const { employees } = useContext(AuthContext);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const[returningEmployee, setReturningEmployee] = useState(null);
    return (
        <div className='bg-[#1c1c1c] p-5 rounded mt-4 overflow-auto h-[60%] text-white'>
            <h2 className="text-2xl font-bold mb-4 text-center">Employee Task Summary</h2>

            {/* Employee Buttons */}
            <div className="flex flex-wrap gap-2 mb-6 justify-center">
                {employees.map((employee, index) => (
                    <button
                        key={index}
                        onClick={() => { if (!selectedEmployee) setSelectedEmployee(employee)
                            else{
                            
                            setSelectedEmployee(null);
                        } }}
                        className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-500 transition"
                    >
                        {employee.firstName}
                    </button>
                ))}
            </div>

            {/* If an employee is selected, show EmployeeDashboard */}
            {selectedEmployee ? (
                <EmployeeDashboard data={selectedEmployee} />
            ) : (
                <>
                    {/* Heading Row */}
                    <div className="grid grid-cols-5 gap-4 font-semibold bg-gray-800 px-4 py-2 rounded">
                        <p>Employee</p>
                        <p>✅ Completed</p>
                        <p>🔵 Active</p>
                        <p>🔴 Failed</p>
                        <p>🟡 New</p>
                    </div>

                    {/* Employee Rows */}
                    {employees.map((employee, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-5 gap-4 px-4 py-2 mt-2 rounded bg-gray-700"
                        >
                            <p>{employee.firstName}</p>
                            <p>{employee.completed}</p>
                            <p>{employee.active}</p>
                            <p>{employee.failed}</p>
                            <p>{employee.newTask}</p>
                        </div>
                    ))}
                </>
            )}
        </div>
    );
};

export default Alltask;
