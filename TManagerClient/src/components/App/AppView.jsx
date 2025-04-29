import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

const AppView = () => {
    const currentAuthUsername = localStorage.getItem('currentAuthUsername') || 'anonym';
    const navigate = useNavigate(); 

    const handleLogout = () => {
        /*
        Close session, remove currentAuthUsername from localStorage and redirect to authentication page.
        */
        localStorage.removeItem('currentAuthUsername');
        navigate('/authentication');
    }

    // Redirect if the user is not authenticated
    if (currentAuthUsername === 'anonym') {
        return <Navigate to='/authentication'/>;
    }

    return (
        <>
            <NavLink to="/authentication" id="link-to-authentication"><h3>Authentication</h3></NavLink>
            <h2>Welcome to your favourite task manager <b>{currentAuthUsername}</b>!</h2>
            <button onClick={handleLogout} style={{backgroundColor:'red', borderRadius:'5px', color:'white'}}>Logout</button>
        </>
    );
}

export default AppView;