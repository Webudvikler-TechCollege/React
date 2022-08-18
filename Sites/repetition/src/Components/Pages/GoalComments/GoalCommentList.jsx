import { useEffect, useState } from "react";
import { appService } from "../../App/AppServices/app.service";
import { Link } from "react-router-dom";

export const GoalCommentList = (props) => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await appService.getList(`comments/${props.id}`);
		console.log(result);
        if (result.data) {
          setApiData(result.data.items);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  return (
    <ul>
      {apiData &&
        apiData.map((goal) => (
          <li key={goal.id}>
            <Link to={goal.id}>{goal.title}</Link>
          </li>
        ))}
    </ul>
  );
};
