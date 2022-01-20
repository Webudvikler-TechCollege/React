import { useState } from 'react'

export const GreetingOnSubmit = () => {
	const [name, setName] = useState("");

	return (
		<>
			<h2>Eksempel på useState Hook med onSubmit event</h2>
			<h3>Hello {name}</h3>

			<div>
				Skriv dit navn i feltet og tryk Send:<br />
				<input id="name2show"></input>
				<button onClick={e => setName(document.getElementById('name2show').value)}>Send</button>
			</div>
		</>
	)



}