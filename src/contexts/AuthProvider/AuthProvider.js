import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const googleLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }

    const githubLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }

    const logOut = () => {
        return signOut(auth);
    }


    useEffect(()=>{
     const unsubscribe = onAuthStateChanged(auth, currentUser => {
           setUser(currentUser);
           return () => unsubscribe();
          });
    },[])

    const authInfo = {user, googleLogin, logOut, githubLogin}

    return (
        <>
            <AuthContext.Provider value={authInfo}>
               {children}
            </AuthContext.Provider>
        </>
    );
};

export default AuthProvider;