import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from 'axios'

export const GoalList = () => {
	const [goals, setGoals] = useState([])

	useEffect(() => {
		async function getData() {
			const url = "https://api.mediehuset.net/sdg/goals"
			try {
				const result = await axios.get(url)
				setGoals(result.data.items)
			}
			catch(err){
				console.error(err)
			}
		}
	
		getData()	
	}, [setGoals])

	return (
		<>
			<h1>FN's verdensmål</h1>
			<ul>
			{goals && goals.map(goal => {
				return (
					<li key={goal.id}>
						<Link to={goal.id}>{goal.title}</Link>
					</li>
				)
			})}
			</ul>
		</>
	)

}