/**
 * Poster Provider til browser lagring af plakat data
 */
import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios'

// Deklarerer context komponent
const PosterContext = createContext()

// Deklarerer provider - children dækker over child components
const PosterProvider = ({children}) => {
	// Deklarerer state hook
	const [ posterList, setPosterList ] = useState([])

	// Kalder useEffect hook
	useEffect(() => {
		// Henter data i sessionsstorage hvis de findes
		if(sessionStorage.getItem('posterlist')) {
			setPosterList(JSON.parse(sessionStorage.getItem('posterlist')))
		} else {
			// Kalder API og smider data i sessionstorage
			const getData = async () => {
				const result = await axios.get('http://localhost:4000/poster')
				sessionStorage.setItem('posterlist', JSON.stringify(result.data));
				setPosterList(result.data)
			}
			getData()
		}
	}, [children]);
	
	// Returnerer komponent med data hook som værdi
	return (
		<PosterContext.Provider value={{posterList, setPosterList}}>
			{children}
		</PosterContext.Provider>
	);
}

// Deklarerer custom hook
const usePosterData = () => useContext(PosterContext)

export { PosterProvider, usePosterData };
