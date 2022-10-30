import { getAuth } from 'firebase/auth';
import React from 'react';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase.init';
import './Login.css';


const auth=getAuth(app);

const Login = () => {
    const [signInWithGoogle, user]=useSignInWithGoogle(auth);
    const location=useLocation();
    const naviagte=useNavigate();
    let from = location.state?.from?.pathname || "/";
    
    const handleLogin=()=>{
        signInWithGoogle()
        .then(()=>{
            naviagte(from, { replace: true })
        })
    }
    return (
        <div>
            <h2>Login</h2>
            <div >
                <button onClick={()=>handleLogin()}>Login in Using Google</button>
            </div>
            <br />
            <form>
                <input type="email" name="" id="" />
                <br />
                <input type="password" name="" id="" />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;