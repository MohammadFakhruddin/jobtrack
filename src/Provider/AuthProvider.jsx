import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.config';

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider()
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
};


    const updateUSer = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
    };
    
    const logOut = () =>{
        return  signOut( auth)
    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        });
        return () => {
            unsubscribe()
        }
    }, [])

    const authData = {
        user,
        setUser,
        createUser,
        logOut,
        signIn,
        loading,
        setLoading,
        googleSignIn,
        updateUSer
    }
    return <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
};

export default AuthProvider;
