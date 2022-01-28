import axios from 'axios'
import { useState } from 'react'

export const Login = () => {
	const loginTxt = 'Indtast brugernavn og password for at logge ind'
	const [message, setMessage] = useState(loginTxt)
	const [loginData, setLoginData] = useState('')

	const submitLogin = async data => {
		const formData = new FormData(data.target.form)
		const url = 'https://api.mediehuset.net/token'
		try {
			const result = await axios.post(url, formData)
			handleSessionData(result);
		}
		catch(err) {
			setMessage('Kunne ikke logge ind.')
		}
	}

	const handleSessionData = data => {
		if(data.status === 201) {
			setLoginData(data.data);
			sessionStorage.setItem('token', JSON.stringify(data.data))
			setMessage(`Du er logget ind som ${data.data.username}`)
		}
	}

	const LogOut = () => {
		sessionStorage.removeItem('token')
		setMessage(loginTxt)
		setLoginData('')
	}

	return (
		<>
		<h1>Login</h1>
		<p>{message}</p>
			{!loginData && !loginData.username ? 
				<form method="post">
					<div>
						<label htmlFor="username">Brugernavn:</label>
						<input type="text" name="username" id="username" />
					</div>
					<div>
						<label htmlFor="password">Adgangskode:</label>
						<input type="password" name="password" id="password" />
					</div>
					<div>
						<button type="button" onClick={submitLogin}>Send</button>
						<button type="reset">Reset</button>
					</div>
				</form> : 
				<form>
					<button type="button" onClick={LogOut}>Logout</button>
				</form>
			}
		</>
	)

}