import { useEffect, useState } from "react"; // Importerer hooks
import { Link, useParams } from "react-router-dom" // Importerer router dom metoder
import axios from 'axios' // Importer fetch metode

/**
 * Komponent som henter liste af mål fra api
 */
const GoalList = () => {
	// Hook med state var og function - datatype er array
	const [ apiData, setApiData ] = useState([])

	// useEffect til kontrol af rendering
	useEffect(() => {
		// Endpoint url
		const url = `https://api.mediehuset.net/sdg/goals`
		
		// Asynkron funktion til fetch af data
		const getData = async () => {
			try {
				// Venter og tildeler data til var result
				const result = await axios.get(url)
				// Tildeler array property til state var
				setApiData(result.data.items)	
			}
			catch(err) {
				console.error(err);
			}
		}
		// Funktionskald
		getData()
		//Angiver state func i dependency array - køres dermed ved hvert render
	}, [setApiData])

	return (
		<ul>
			{
				// Tjekker apiData eksisterer og mapper - indsætter link til detaljer
				apiData && apiData.map(item => {
					return (
						<li key={item.id}>
							<Link to={`/goals/${item.id}`}>{item.title}</Link></li>
					)
				})
			}
		</ul>
	)
}

/**
 * Komponent til at hente SDG detaljer
 * @param id - url parameter med id
 */
const GoalDetails = () => {
	// Henter id fra url (:id er defineret i route)
	const { id } = useParams()
	// Hook med state var og function - datatype er objekt
	const [ apiData, setApiData ] = useState({})

	// useEffect til kontrol af rendering
	useEffect(() => {
		// Endpoint url
		const url = `https://api.mediehuset.net/sdg/goals/${id}`
		
		// Asynkron funktion til fetch af data
		const getData = async () => {
			// Venter og tildeler data til var result
			const result = await axios.get(url)
			// Tildeler objekt property til state var
			setApiData(result.data.item);
		}
		// Funktionskald
		getData()
		// Sætter id i dependency array - renderes hver gang det ændres
	}, [id]);

	return (
		<div>
			{
				// Tjekker at state var er true
				apiData && (
					<>
						<h2>{apiData.title}</h2>
						<img src={apiData.image} alt={apiData.title}></img>
						<p>{apiData.byline}</p>
					</>
				)
			}
		</div>
	)
}

export { GoalList, GoalDetails };
