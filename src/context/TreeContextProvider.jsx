import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import axios from 'axios';


const auth = getAuth(app)
export const AuthContext = createContext(null);


const TreeContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const provider = new GoogleAuthProvider();
    const [loading, setLoading] = useState(false);

    // firebase cental 
    const registerUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // signOut 
    const logOutUser = () => {
        return signOut(auth)
    }

    // updateProfile
    const updateProfileUser = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    // Social login 
    // googleUser
    const googleUser = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    // 
    useEffect(() => {
        const unSubscript = onAuthStateChanged(auth, (user) => {
            if (user && user.email) {

                setCurrentUser(user)
                setLoading(false)
                const email = { emailUser: user.email };
                axios.post('http://localhost:5000/user/tokenSet', email)
                    .then(res => {
                        localStorage.setItem('userAccessToken', res.data.token)

                    })
            } else {
                console.log('user nai: ', currentUser);
                localStorage.removeItem('userAccessToken')
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
        loading

    }
    return <AuthContext.Provider value={authInfoUser}>{children}</AuthContext.Provider>

};

export default TreeContextProvider;