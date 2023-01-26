import { useEffect, useState } from "react";

const Counter = () => {
	const [ count, setCounter ] = useState(0)

	useEffect(() => {
		setTimeout(() => {
			setCounter(count + 1)		
		}, 1000)
	}, [count]);

	return (
		<div>Antal renders: {count}
			
		</div>
	);
}

export { Counter };
