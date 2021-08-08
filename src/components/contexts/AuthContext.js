import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = (props) => {
    
    const AuthStatusLocal = localStorage.getItem("AuthStatus");
    const AuthLevelLocal = localStorage.getItem("AuthLevel");

    const [AuthStatus, SetAuthStatus] = useState(AuthStatusLocal);
    const [AuthLevel, SetAuthLevel] = useState(AuthLevelLocal);

    const LogIn = (LoginStatus, LoginLevel) => {
        SetAuthStatus(LoginStatus);
        SetAuthLevel(LoginLevel);
        localStorage.setItem("AuthStatus", LoginStatus);
        localStorage.setItem("AuthLevel", LoginLevel);
    }

    const LogOff = () => {
        SetAuthStatus(false);
        localStorage.removeItem("AuthStatus");
        localStorage.removeItem("Username");
        localStorage.removeItem("AccessToken");
        localStorage.removeItem("AuthLevel");
    }

    return (
        <AuthContext.Provider value={{AuthStatus, AuthLevel, LogIn, LogOff}}>
            { props.children }
        </AuthContext.Provider>
    );
};
