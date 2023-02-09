import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios'

const PosterContext = createContext()

const PosterProvider = ({children}) => {
	const [ posterList, setPosterList ] = useState([])

	useEffect(() => {
		if(sessionStorage.getItem('posterlist')) {
			setPosterList(JSON.parse(sessionStorage.getItem('posterlist')))
		} else {
			const getData = async () => {
				const result = await axios.get('http://localhost:4000/poster')
				sessionStorage.setItem('posterlist', JSON.stringify(result.data));
				setPosterList(result.data)
			}
			getData()
		}
	}, [children]);
	
	return (
		<PosterContext.Provider value={{posterList, setPosterList}}>
			{children}
		</PosterContext.Provider>
	);
}

const usePosterData = () => useContext(PosterContext)

export { PosterProvider, usePosterData };
