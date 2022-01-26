import React, { createContext, useState, useEffect } from "react";

// Start med at lave et nyt context med createContext
const AppContext = createContext();

// Funktionen AppContextProvider er vores provider component, som alle children kan 'subscribe' til
const AppContextProvider = ({ children }) => {

  // Her er vores globale states som skal bruges i flere components
  const [loginData, setLoginData] = useState([]);

  // useEffect der gemmer logindata fra sessionStorage
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setLoginData(JSON.parse(sessionStorage.getItem("token")));
    }
  }, [setLoginData]);

  // Returner AppContext.Provider med value = Alle de states / values der skal deles
  return (
    <AppContext.Provider value={{ 
        loginData, 
        setLoginData 
      }}>
      {children}
    </AppContext.Provider>
  );
};

// Først: import {AppContextProvider} from './context/ContextProvider'; i Top hierakiet (App.js)
// Herefter: import { AppContext } from "../../context/ContextProvider" indeni det component som skal subsribe 
// og deklarer værdierne med : const { testState, setTestState } = useContext(AppContext);

export { AppContext, AppContextProvider }