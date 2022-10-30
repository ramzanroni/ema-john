import { useEffect, useState } from "react";

import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase.init";

const provider = new GoogleAuthProvider();

const auth = getAuth(app);
const useFirebase=()=>{
    const [user, setUser]=useState('');
    const signInWithGoogle=()=>{
        signInWithPopup(auth, provider)
        .then(result=>{
            const user=result.user;
            console.log(user);
        })
        .catch(error=>{
            console.error(error);
        })
    }
    
    const handleSignOut=()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log('Sign-out successful.');
          }).catch((error) => {
            // An error happened.
          });
    }
    useEffect(()=>{
        onAuthStateChanged(auth, user=>{
            setUser(user);
        })
    },[]);
return {user,signInWithGoogle, handleSignOut};
}
export default useFirebase;