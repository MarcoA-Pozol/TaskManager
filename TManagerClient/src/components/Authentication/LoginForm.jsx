import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    // Get user from session
    const [currentAuthUser, setCurrentAuthUser] = useState({username:'',password:''});
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // Users DB
    const mockUsers = [{username:'Juan', password:'thepassword'}, {username:'Maria', password:'thepassword'}, {username:'Carlos', password:'thepassword'}];

    const handleAuthentication = (event) => {
        /* 
        Check if pair user-password exist in the database. 
        If true, authenticate and navigate to '/'; if false show an alert.
        */
        event.preventDefault();

        const userFound = mockUsers.find(
            (user) => user.username === username && user.password === password
        );

        if (userFound) {
            setCurrentAuthUser({username:username, password:password});
            localStorage.setItem('currentAuthUsername', username);
            navigate('/');
        } else {
            alert('Invalid username or password.');
        }
    };

    return( 
        <>
            <div style={{backgroundColor:'rgb(195, 205, 205)', padding:'1rem'}}>
                <form onSubmit={handleAuthentication}>
                    <label>Username<input type='text' value={username} onChange={(e) => setUsername(e.target.value)}></input></label>
                    <label>Password<input type='password' value={password} onChange={(e) => setPassword(e.target.value)}></input></label>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </>
    );
};

export default LoginForm;