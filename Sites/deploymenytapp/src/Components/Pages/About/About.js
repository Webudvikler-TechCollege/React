import { GreetingOnInput } from "../../Hooks/UseState/GreetingOnInput"
import { GreetingOnSubmit } from "../../Hooks/UseState/GreetingOnSubmit"
import { GreetingWithFunction } from "../../Hooks/UseState/GreetingWithFunction"
import { Counter } from "../../Hooks/UseState/Counter"
export const About = () => {
	return (
		<>
			<h1>Om os</h1>
			{/*
			<hr />
			<Counter />
			<hr />
			<GreetingOnInput />
			<hr />
			<GreetingOnSubmit />		
			<hr />
			*/
			}
			<GreetingWithFunction />		
		</>
	)

}