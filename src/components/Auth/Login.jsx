import React, { useState } from 'react';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const submithandler=(e)=>{
        e.preventDefault();
        props.handleLogin(email, password);
        setEmail('');
        setPassword('');
    }
    return (
        <div className='flex items-center h-screen w-screen justify-center'>
            <div className='border-2 rounded-2xl border-emerald-600 p-20'>
            <form className='flex flex-col items-center justify-center' onSubmit={(e)=>{
                submithandler(e);
            }}>
                <input  
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value);
                }}
                required className='text-white outline-none bg-transparent border-2 placeholder:text-grey-400 border-emerald-600 py-3 text-xl px-5 rounded-full ' type='email' placeholder='Enter Email ID' />
                <input  
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value);
                }}
                required className='text-white outline-none bg-transparent border-2  mt-4 placeholder:text-grey-400 border-emerald-600 py-3 text-xl px-5 rounded-full ' type='password' placeholder='Password' />
                <button className='bg-emerald-600 border-none text-white py-2 px-4 rounded-full mt-4' type='submit'>Login</button>
            </form>

            </div>
        </div>
    );
};

export default Login;