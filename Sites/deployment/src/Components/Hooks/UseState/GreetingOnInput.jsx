import { useState } from 'react'

export const GreetingOnInput = () => {
	const [name, setName] = useState("");

	return (
		<>
			<h2>Eksempel på useState Hook med onInput event</h2>
			<h3>Hello {name}</h3>

			<div>
				Skriv dit navn i feltet:<br />
				<input id="name" onInput={e => setName(e.target.value)}></input>
			</div>
		</>
	)



}