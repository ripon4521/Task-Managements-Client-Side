import { createContext, useEffect, useState } from "react";

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../Firebase/firebase.config";
// import { axiosPublic } from "../Hooks/useAxiosPublic";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setloading]=useState(true);
    const provider = new GoogleAuthProvider();

    const createUser =(email,password)=>{
        setloading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }
    const sighnIn = (email,password)=>{
        setloading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleLogin = ()=>{
        setloading(true)
        return signInWithPopup(auth ,provider)
     }
     const logout = ()=>{
        setloading(true)
        return signOut(auth)
    }
    const updateuserProfile = (name , photo)=>{
        setloading(true)
     return   updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    useEffect(()=>{
        const UnSubscribe= onAuthStateChanged(auth, CurrentUser =>{
            // console.log(CurrentUser);
        
            setUser(CurrentUser)
          setloading(false)
      
        })
        return ()=>{
            UnSubscribe();
        }
    });
console.log(user);

const userInfo = {
    user,
    loading,
    googleLogin,
    logout,
    createUser,
    sighnIn,
    updateuserProfile
}


    return (
        <AuthContext.Provider value={userInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;