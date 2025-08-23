import React, { useEffect, createContext, useState } from 'react';
import { getLocalStrorage } from '../utils/Localstorage';    

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const { employees, admin } = getLocalStrorage();
        setUserData({ employees, admin });
    }, []);

    return (
        <AuthContext.Provider value={ userData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
