import { useEffect, useState } from "react"
import axios from 'axios'
import { useParams } from "react-router-dom";

export const GoalDetails = () => {
	const [goal, setGoal] = useState([])
	const { goal_id } = useParams();

	const getData = async () => {
		const url = `https://api.mediehuset.net/sdg/goals/${goal_id}`
		try {
			const result = await axios.get(url)
			setGoal(result.data.item)
		}
		catch(err){
			console.error(err)
		}
	}

	useEffect(() => {
		getData()	
	}, [setGoal])

	return (
		<>
			<h1>{goal.title}</h1>
			<h2>{goal.byline}</h2>
			<article>
				<figure>
					<img src={goal.image} alt={goal.title} />
				</figure>
				{goal.description}
			</article>
		</>
	)

}