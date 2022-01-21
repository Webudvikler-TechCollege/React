import { useState, useEffect } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";

export const GoalList = () => {
	const [ goals, setGoals ] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const url = 'https://api.mediehuset.net/sdg/goals'
			const result = await axios.get(url)
			setGoals(result.data.items);
		}
		getData()		
	}, [setGoals])

	return (
		<ul>
			{goals && goals.map(goal => {
				return (
					<li key={goal.id}>
						<Link to={goal.id}>{goal.title}</Link>
					</li>
				)
			})}
		</ul>
	)
}