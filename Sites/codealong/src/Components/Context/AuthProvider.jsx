import { createContext, useEffect, useState } from "react";

const AuthContext = createContext()

const AuthProvider = ({children}) => {
	const [loginData, setLoginData] = useState('')

	useEffect(() => {
		if(sessionStorage.getItem('token')) {
			setLoginData(JSON.parse(sessionStorage.getItem('token')))
		}
	}, [children])

	return (
		<AuthContext.Provider value={{loginData, setLoginData}}>
			{children}
		</AuthContext.Provider>
	)
}

export { AuthContext, AuthProvider }