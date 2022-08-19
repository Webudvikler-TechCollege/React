import { useEffect, useState } from "react";
import { AppService } from "../../App/AppServices/AppService";
import { Link } from "react-router-dom";

export const GoalCommentList = props => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await AppService.getList(`comments/${props.id}`);
        if (result.data) {
          setApiData(result.data.items);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [props.id]);

  return (
    <ul>
      {apiData &&
        apiData.map((comment) => (
          <li key={comment.id}>
            <p>
            <b>{comment.title}</b><br />
            {comment.comment}<br />
            <span>Indsendt af {comment.user.firstname} d. {comment.created}</span>            
            </p>
          </li>
        ))}
    </ul>
  );
};
