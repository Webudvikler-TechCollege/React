import { useContext } from "react"
import { AuthContext } from "../../Context/AuthProvider"

export const About = () => {
	const {loginData} = useContext(AuthContext)

	return (
		<>
		<h1>Om os</h1>
		{!loginData ? 
			<p>Du er ikke logget ind</p>
			:
			<p>Du er logget ind som {loginData.username}</p>
		}
		</>
	)
}