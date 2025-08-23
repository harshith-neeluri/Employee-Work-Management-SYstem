import React from 'react';

const Header = (props) => {

    const loggedOut = () => {
        localStorage.setItem('loggedInUser', '');
   //    window.location.reload();
    
        props.changeuser('');
    };
    return (
        <div className='flex    items-end justify-between p-10 bg-gray-800 text-white'>
            <h1 className='text-xl font-bold'>Hello<br/> <span className='text-2xl'>{props.data.firstName}</span></h1>
            <button 
            onClick={loggedOut}
            className='ml-4 p-2 bg-red-600 rounded'>Log Out</button>
        </div>
    );
};

export default Header;