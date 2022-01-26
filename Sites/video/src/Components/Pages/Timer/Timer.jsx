import { useState, useEffect } from 'react'

export const Timer = () => {
	const [count,setCount] = useState(0)

	const timer = () => {
		setTimeout(() => {
			setCount(count => (count+1))
		}, 1000)	
	}

	useEffect(() => {
		timer()
	}, [count]);

	return (
		<h2>Antal renders: {count}</h2>
	)
}