import React from "react";
import { NavLink } from "react-router-dom";
import LoginForm from "./LoginForm.jsx";

const AuthenticationView = () => {
    
    return (
        <>
            <NavLink to="/" id="link-to-app"><h3>App</h3></NavLink>
            <h1>Authentication</h1>
            <p>This is the authentication view.</p>
            <LoginForm/>
        </>
    );
}

export default AuthenticationView;