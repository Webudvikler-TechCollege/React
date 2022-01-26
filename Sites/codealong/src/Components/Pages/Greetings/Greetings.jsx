import { useState } from 'react'

export const Greetings = () => {
	const [ name, setName ] = useState('Heinz');
	return (
		<>
			<h2>Hej mit navn er {name}</h2>
			<input type="text" onInput={e => setName(e.target.value)}/>
		</>
	)
}