import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import windmill from "./windmill.json"

const Main = () => {
	const { id } = useParams();
	const [ data, setData ] = useState({});
	
	useEffect(() => {
		setData(windmill[id])
	}, [id])

	return (
		<div>
			<h1>{data.Møllenummer}</h1>			
		</div>
	);
}

export default Main;
