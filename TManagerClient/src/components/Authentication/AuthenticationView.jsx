import React, {useState} from "react";
import LoginForm from "./LoginForm.jsx";
import RegisterForm from "./RegisterForm.jsx";

const AuthenticationView = () => {
    const [isLoginVisible, setIsLoginVisible] = useState(true);

    const toggleForm = () => {
        /*
        Toggle between login and Register formularies
        */
        setIsLoginVisible((prev) => !prev);
    };

    return (
        <>
            {isLoginVisible ? (
                    <>
                        <LoginForm/>
                        <br></br>
                        <span id="no-account-button" onClick={toggleForm}>I do not have an account yet</span>
                    </>
                    
                ): (
                    <>
                        <RegisterForm/>
                        <br></br>
                        <span id="existing-account-button" onClick={toggleForm}>I already have an account</span>
                    </>
                )}
        </>
    );
}

export default AuthenticationView;