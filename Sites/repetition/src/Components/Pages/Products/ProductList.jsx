import { Page } from "../../App/Layout/Layout"
import { useEffect, useState } from "react";
import { getList } from '../../App/AppServices/app.service';
import { Link } from 'react-router-dom';

export const ProductList = () => {
	const [apiData, setApiData] = useState([]);

	useEffect(() => {
		const getData = async () => {
			try {
				const result = await getList('goals');
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
			{apiData && apiData.map(goal => (
				<div key={goal.id}>
					<Link to={goal.id}>{goal.title}</Link>
				</div>
			))}
		</Page>
	)

}