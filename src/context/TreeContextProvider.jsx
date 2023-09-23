import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import axios from 'axios';


const auth = getAuth(app)
export const AuthContext = createContext(null);


const TreeContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [authLoading, setAuthLoading] = useState(true);//false not work
    const provider = new GoogleAuthProvider();

    // firebase cental 
    const registerUser = (email, password) => {
        setAuthLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        setAuthLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // signOut 
    const logOutUser = () => {
        setAuthLoading(true)
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
        setAuthLoading(true)
        return signInWithPopup(auth, provider)
    }

    // 
    useEffect(() => {
        const unSubscript = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
            if (user && user.email) {
                const email = { emailUser: user.email };
                axios.post('http://localhost:5000/user/tokenSet', email)
                    .then(res => {
                        localStorage.setItem('userAccessToken', res.data.token)
                        setAuthLoading(false)
                    })
            } else {
                console.log('user nai: ', currentUser);
                localStorage.removeItem('userAccessToken')
                setAuthLoading(false)

            }
        })
        return unSubscript;
    }, [])
    //  

    const authInfoUser = {
        currentUser,
        registerUser,
        loginUser,
        logOutUser,
        updateProfileUser,
        googleUser,
        authLoading

    }
    return <AuthContext.Provider value={authInfoUser}>{children}</AuthContext.Provider>

};

export default TreeContextProvider;