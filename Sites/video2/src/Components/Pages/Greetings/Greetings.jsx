import { useState } from 'react'

export const Greeting = () => {
	const [ name, setName ] = useState('Jane')

	return (
		<>
			<h1>Hej. Mit navn er {name}</h1>
			<input type="text" onInput={event => setName(event.target.value)} />
		</>		

	)

}