import axios from 'axios'
import { useState, useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider';
import { useForm } from "react-hook-form";

export const Login = () => {
	const { register, handleSubmit, formState: { errors }} = useForm()

	const [message, setMessage] = useState('');
	const {loginData, setLoginData} = useContext(AuthContext)

	const SubmitLoginForm = async data => {
		const formData = new FormData()
		formData.append('username', data.username)
		formData.append('password', data.password)

		try {
			const result = await axios.post('https://api.mediehuset.net/token', formData)
			handleSessionData(result);	
		}
		catch(err) {
			console.error(err)
			alert('Kunne ikke logge ind')
		}
	}

	const handleSessionData = resp => {
		if(resp.status === 201) {			
			sessionStorage.setItem('token', JSON.stringify(resp.data))
			setLoginData(resp.data)
		}
	}

	const logOut = () => {
		sessionStorage.removeItem('token')
		setLoginData('')
	}

	return (
		<div>
			<h1>Login</h1>
			{!loginData ? 
				<>
				<p>Indtast dit brugernavn og adgangskode for at logge ind:</p>
				<form method="post" onSubmit={handleSubmit(SubmitLoginForm)}>
					<div>
						<label htmlFor="username">Brugernavn: </label>
						<input {...register("username", { required: true })} />
						{errors.username && <span>Du skal udfylde dit brugernavn</span>}
					</div>
					<div>
						<label htmlFor="password">Adgangskode: </label>
						<input type="password" {...register("password", { required: true })} />
						{errors.password && <span>Du skal udfylde dit password</span>}
					</div>
					<div>
						<button type="submit">Login</button>
						<button type="reset">Nulstil felter</button>
					</div>
				</form>
				</>
				:
				<>
				<p>Du er logget ind som <i>{loginData.username}</i></p>
				<form>
					<button type="button" onClick={logOut}>Log out</button>
				</form>
				</>
			}
		</div>
	);
}