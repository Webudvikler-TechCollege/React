/**
 * Følgende kode laver et komponent (<AuthProvider>) som kan 
 * transportere data ned i gennem reacts komponent hieraki.
 * Det betyder at vi nemt kan hente en brugers logindata fra alle 
 * child components. Derfor skal AuthProvider komponentet placeres 
 * så højt som muligt i hierakiet - eksempelvis i filen /src/index.js
 * Filens custom hook (useAuth) bruges desuden på Login siden.
 */
import { createContext, useContext, useEffect, useState } from "react";
// Opretter auth context
const AuthContext = createContext()

// Function Component til at provide login data med
const AuthProvider = ({ children }) => {
	const [loginData, setLoginData] = useState('')

	// Hent data fra sessionstorage hvis det findes
	useEffect(() => {
		if(sessionStorage.getItem('token')) {
			setLoginData(JSON.parse(sessionStorage.getItem('token')))
		}
	}, [children]);

	return (
		<AuthContext.Provider value={{loginData, setLoginData}}>
			{children}
		</AuthContext.Provider>
	)
}

// Custom auth hook 
const useAuth = () => useContext(AuthContext)

export { AuthContext, AuthProvider, useAuth }