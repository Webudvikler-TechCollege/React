import { createContext, useState, useEffect } from 'react'

const AppContext = createContext();

const AppContextProvider = ({children}) => {

    const [loginData, setLoginData] = useState('');

    useEffect(() => {
        if(sessionStorage.getItem('token')) {
            setLoginData(JSON.parse(sessionStorage.getItem('token')))
        }
    }, [])

    return (
        <>
            <AppContext.Provider
                value={{loginData, setLoginData}}
            >
                {children}
            </AppContext.Provider>
        </>
    )
}

export { AppContext, AppContextProvider }