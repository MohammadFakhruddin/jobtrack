import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, 
    GoogleAuthProvider, onAuthStateChanged, 
    signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext()


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)



        const googleProvider = new GoogleAuthProvider()
    const googleSignIn = () => {
        return signInWithPopup(auth,googleProvider)
    }

   const createUser = (email, password) => {
            setLoading(true)

        return createUserWithEmailAndPassword(auth, email, password)
    }


       const signIn = (email,password) => {
                setLoading(true)

        return signInWithEmailAndPassword(auth, email, password)
    }


    const updateUser = (updatedData)=>{
        return updateProfile(auth.currentUser, updatedData)

    }

       const logOut = ()=>{
        return signOut(auth)
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
        googleSignIn,
        loading,
        setLoading,
        updateUser
    }


      return <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>


}

export default AuthProvider;
