import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppView from "../components/App/AppView.jsx";
import AuthenticationView from "../components/Authentication/AuthenticationView.jsx";
import PageNotFoundView from "../components/PageNotFoundView.jsx";
import { AnimatePresence } from "framer-motion"; // Motion transition effect between pages change

const AppRoutes = () => {
    return (
        <AnimatePresence>
            <Router>
                <Routes>
                    <Route path="/" element={<AppView/>}/>
                    <Route path="/authentication" element={<AuthenticationView/>}/>
                    <Route path="*" element={<PageNotFoundView/>} />
                </Routes>
            </Router>
        </AnimatePresence>
    );
};

export default AppRoutes;