import { Page } from "../../App/Layout/Layout"
import { useEffect, useState } from "react";
import { AppService } from '../../App/AppServices/AppService';
import { Link, Outlet } from 'react-router-dom';

export const GoalList = () => {
	const [apiData, setApiData] = useState([]);

	useEffect(() => {
		const getData = async () => {
			try {
				const result = await AppService.getList('goals');
				if(result.data) {
					setApiData(result.data.items);
				}
			}
			catch(error) {
				console.error(error)
			}
		}
		getData();
	}, []);

	return (
		<Page title="Produkter" description="Se vores skønne produkter">
			<ul>
			{apiData && apiData.map(goal => (
				<li key={goal.id}>
					<Link to={goal.id}>{goal.title}</Link>
				</li>
			))}
			</ul>
			<hr />
			<Outlet />
		</Page>
	)

}