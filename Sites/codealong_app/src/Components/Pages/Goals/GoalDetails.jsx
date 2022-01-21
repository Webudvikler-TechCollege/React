import { useState, useEffect } from "react";
import axios from 'axios'
import { useParams } from "react-router-dom";

export const GoalDetails = () => {
	const [ goal, setGoal ] = useState({});
	const { goal_id } = useParams();

	useEffect(() => {
		const getData = async () => {
			const url = `https://api.mediehuset.net/sdg/goals/${goal_id}`
			const result = await axios.get(url)
			setGoal(result.data.item)
		}
		getData()		
	}, [goal_id])

	return (
		<>
			<h1>{goal.title}</h1>
		</>
	)
}