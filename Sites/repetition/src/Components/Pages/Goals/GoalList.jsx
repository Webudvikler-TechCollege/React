import { Page } from "../../App/Layout/Layout"
import { useEffect, useState } from "react";
import { appService } from '../../App/AppServices/app.service';
import { Link, Outlet } from 'react-router-dom';

export const GoalList = () => {
	const [apiData, setApiData] = useState([]);

	useEffect(() => {
		const getData = async () => {
			try {
				const result = await appService.getList('goals');
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