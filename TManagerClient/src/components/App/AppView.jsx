import React from "react";
import { NavLink } from "react-router-dom";

const AppView = () => {

    return (
        <>
            <NavLink to="/authentication" id="link-to-authentication"><h3>Authentication</h3></NavLink>
            <h2>Welcome to your favourite task manager.</h2>
        </>
    );
}

export default AppView;