import React from 'react';
import './Home.css';
import {useAuthState} from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import app from '../../firebase.init';
const auth=getAuth(app);
const Home = () => {
    const [user]=useAuthState(auth);
    return (
        <div>
            <h1>Home</h1>
            {
                user?<p>Welcome ...{user.displayName}</p>:<p>No body login</p>
            }
        </div>
    );
};

export default Home;