import React, { createContext, useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();
function AuthProvider({ children }) {
    const [isLogin, setIsLogin] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const acc = localStorage.getItem("acc");
        if (acc) {
            setIsLogin(JSON.parse(acc));
        }
    }, []);
    const saveLogin = (acc) => {
        console.log(acc);
        
        setIsLogin(acc);
        localStorage.setItem("acc", JSON.stringify(acc));
         navigate("/");
    }
    const logout = () => {
        setIsLogin(null);
        localStorage.removeItem("acc");
        navigate("/");
    }
    
    return (
        <AuthContext.Provider value={{ isLogin, saveLogin, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;