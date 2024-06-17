import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (userType, token, username, nic) => {
        setUser({ userType, token, username, nic });
    };

    // const logout = () => {
    //     setUser(null);
    //     document.cookie = 'jwt=; path=/; max-age=0;';
    // };

    return (
        <AuthContext.Provider value={{ user, login }}>
            {children}
        </AuthContext.Provider>
    );
};
