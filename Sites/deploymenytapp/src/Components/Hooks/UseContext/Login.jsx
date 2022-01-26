import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext()

export const Login = () => {
	return (
		<AuthProvider>
			<LoginForm />
		</AuthProvider>
	)
}

const AuthProvider = ({ children }) => {
	const [loginData, setLoginData] = useState('')

	useEffect(() => {
		if (sessionStorage.getItem('token')) {
			setLoginData(JSON.parse(sessionStorage.getItem('token')))
		}
	}, [children])

	return (
		<AuthContext.Provider value={{ loginData, setLoginData }}>
			{children}
		</AuthContext.Provider>
	)
}

export const LoginForm = () => {
	const { loginData, setLoginData } = useContext(AuthContext)
	const [message, setMessage] = useState('')

	const submitLogin = async data => {
		const formdata = new FormData()
		formdata.append('username', data.target.form.username.value)
		formdata.append('password', data.target.form.password.value)

		const url = "https://api.mediehuset.net/token"
		const result = await axios.post(url, formdata)
		console.log(result);
		handleSessionData(result.data)
	}

	const handleSessionData = resp => {
		if (!resp.message) {
			setLoginData(resp)
			sessionStorage.setItem('token', JSON.stringify(resp))
		} else {
			setMessage('Fandt ingen match på brugernavn eller adgangskode')
		}
	}

	const logOut = () => {
		setLoginData([])
		sessionStorage.removeItem('token')
		setMessage('Du er nu logget ud')

		let timer = setTimeout(() => {
			clearTimeout(timer)
		}, 10000)
	}

	return (
		<>
			<p>{message}</p>
			{!loginData && !loginData.username ?
				<form>
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
						<button type="reset">Nulstil</button>
					</div>
				</form>
				:
				<form>
					<p>Du er logget ind som {loginData.username}</p>
					<button onClick={() => { logOut() }}>Log ud</button>
				</form>
			}
		</>
	)
}