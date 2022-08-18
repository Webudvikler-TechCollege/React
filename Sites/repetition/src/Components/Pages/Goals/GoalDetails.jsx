import { Page } from "../../App/Layout/Layout"
import { useEffect, useState } from "react";
import { appService } from '../../App/AppServices/app.service';
import { useParams } from 'react-router-dom';
import { GoalCommentList} from '../GoalComments/GoalCommentList'

export const GoalDetails = () => {
	const [apiData, setApiData] = useState({});
	const { id } = useParams();

	useEffect(() => {
		const getData = async () => {
			try {
				const result = await appService.getDetails('goals',id);
				if(result.data) {
					setApiData(result.data.item);
				}
			}
			catch(error) {
				console.error(error)
			}
		}
		getData();
	}, [id]);

	return (
		<Page title={apiData.title} description={apiData.description}>
			{apiData.description}
			<hr />
			<GoalCommentList id={id} />
		</Page>
	)

}