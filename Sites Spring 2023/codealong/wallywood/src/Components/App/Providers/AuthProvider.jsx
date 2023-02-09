/**
 * AuthProvider til state transport af logindata
 */
import { createContext, useContext, useEffect, useState } from "react";

// Deklarerer context komponent
const AuthContext = createContext()

// Deklarerer provider - children dækker over child components
const AuthProvider = ({children}) => {
	// Deklarerer state hook
	const [ loginData, setLoginData ] = useState({})

	// Kalder useEffect hook
	useEffect(() => {
		// Henter logindata i sessionsstorage hvis de findes
		if(sessionStorage.getItem('token')) {
			setLoginData(JSON.parse(sessionStorage.getItem('token')))
		}
	}, [children])

	// Returnerer komponent med logindata hook som værdi
	return (
		<AuthContext.Provider value={{loginData, setLoginData}}>
			{children}
		</AuthContext.Provider>
	);
}

// Deklarerer custom hook
const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth };
