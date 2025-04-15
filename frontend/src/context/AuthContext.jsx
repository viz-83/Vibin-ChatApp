import React, { createContext, useContext, useState } from 'react'

export const AuthContext = createContext();

export const useAuthContext = () => {
    return useContext(AuthContext)
}

export const AuthContextProvider = ({ children }) => {
    
    const getStoredUser = () => {
        try {
            const stored = localStorage.getItem("chat-user");
            return stored ? JSON.parse(stored) : null;
        } catch (err) {
            console.warn("Failed to parse 'chat-user' from localStorage. Clearing it.");
            localStorage.removeItem("chat-user");
            return null;
        }
    };

    const [authUser, setAuthUser] = useState(getStoredUser);

    return <AuthContext.Provider value={{authUser,setAuthUser}}>
        {children}
        </AuthContext.Provider>
}