import { useState } from 'react'

export const Counter = () => {
	const [counter, setCounter] = useState(0);

	return (
		<>
			<h2>Du har klikket knappen {counter} gange</h2>
			<button onClick={() => {setCounter(counter+1)}}>Klik mig</button>
		</>
	)
}