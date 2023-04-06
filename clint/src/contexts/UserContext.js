import React, { createContext, useEffect, useState } from "react";
import {
  confirmPasswordReset,
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const provider = new GoogleAuthProvider();

const auth = getAuth(app);

const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);

    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    localStorage.removeItem('secret-token')
    return signOut(auth);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("current user inside", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);
  const LoginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const ForgetPassword = ( email) => {
    setLoading(true);
   return sendPasswordResetEmail(auth , email , {
    url :'https://pro-motors.vercel.app/login'
   });
  }
const ResetPassword = (oobCode ,newPassword) => {
   return confirmPasswordReset(auth , oobCode , newPassword);
} 

 const [Refresh , setRefresh] = useState(false);
  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    LoginWithGoogle,
    Refresh ,
    setRefresh,
    ForgetPassword,
    ResetPassword,
   
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
