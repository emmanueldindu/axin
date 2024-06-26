import React, { createContext, useState, useContext, useEffect } from "react";
import { getCurrentUser } from "../lib/appwrite";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await getCurrentUser();
        if (res) {
          console.log("User found:", res);
          setUser(res);
          setIsLoggedIn(true);
        } else {
          console.log("No user found");
          setUser(null);
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.log("Error fetching user:", error);
        setUser(null);
        setIsLoggedIn(false);
      } finally {
        console.log("Finished checking user. isLoading:", false);
        setIsLoading(false);
      }
    };

    fetchUser();
  }, []);



  return (
    <GlobalContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        user,
        setUser,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
