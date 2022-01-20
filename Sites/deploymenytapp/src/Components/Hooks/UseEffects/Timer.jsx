import { useEffect, useState } from "react"

export const Timer = () => {
	const [count, setCount] = useState(0)
	
	useEffect(() => {
		let timer = setTimeout(() => {
			setCount(count => count+1)
		},1000)
		return () => clearTimeout(timer)
	});

	return (
		<>
			<h2>Antal renders: {count}</h2>
		</>
	)
}