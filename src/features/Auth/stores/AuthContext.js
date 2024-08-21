import React, {useEffect, useState, createContext} from "react";
import {auth} from "../../../firebase";
export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged( async (user) => {
      setLoading(true);
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{currentUser, loading}}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
