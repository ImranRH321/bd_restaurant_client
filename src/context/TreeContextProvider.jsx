import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';


const auth = getAuth(app)
export const AuthContext = createContext(null);


const TreeContextProvider = ({ children }) => {
    const user = true;
    const [currentUser, setCurrentUser] = useState(null);
    const provider = new GoogleAuthProvider();

    // firebase cental 
    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    // signOut 
    const logOutUser = () => {
        return signOut(auth)
    }

    // updateProfile
    const updateProfileUser = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    // Social login 
    // googleUser
    const googleUser = () => {
        return signInWithPopup(auth, provider)
    }





    useEffect(() => {
        const unSubscript = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
        })
        return unSubscript;
    }, [])

    const authInfoUser = {
        user,
        currentUser,
        registerUser,
        loginUser,
        logOutUser,
        updateProfileUser ,
        googleUser
    }
    return <AuthContext.Provider value={authInfoUser}>{children}</AuthContext.Provider>

};

export default TreeContextProvider;