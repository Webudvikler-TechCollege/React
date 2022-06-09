import axios from "axios";
import { useContext, useState } from "react"
import { useForm } from "react-hook-form";
import { Footer } from "../../Partials/Footer/Footer";
import { Header } from "../../Partials/Header/Header";
import { Main } from "../../Partials/Main/Main";
import { AuthContext } from "../Auth/AuthProvider"
import { AppRouter } from "../Router/Router";

export const LoginWrapper = () => {
	const { loginData, setLoginData } = useContext(AuthContext)
	const { register, handleSubmit, formState: { errors } } = useForm();
	const [ message, setMessage ] = useState('');

	const onSubmit = async data => {
		const formdata = new FormData()
		formdata.append('username', data.username)
		formdata.append('password', data.password)

		const url = "https://api.mediehuset.net/token"
		const result = await axios.post(url, formdata)
		handleSessionData(result.data)
	}

	const handleSessionData = resp => {
		if (!resp.message) {
			setLoginData(resp)
			sessionStorage.setItem('token', JSON.stringify(resp))
			setMessage(`Du er logget på som ${resp.username}`)
		} else {
			setMessage('Fandt ingen match på brugernavn eller adgangskode')
		}

	}
	
	const LoginForm = () => {
		return (
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<h4>Login til SingOnline</h4>
				</div>
				<div>
					<label htmlFor="username">Brugernavn:</label>
					<input {...register('username', { required: true })} />
					{errors.username && "Du skal indtaste dit brugernavn!"}
				</div>
				<div>
					<label htmlFor="password">Adgangskode:</label>
					<input type="password" {...register('password', { required: true })} />
					{errors.username && "Du skal indtaste din adgangskode!"}
				</div>
				<div>
					<button type="reset">Annuller</button>
					<button type="submit">Send</button>
				</div>
			</form>

		)
	}

	return (
		<>
			{!loginData || !loginData.username ?
				<div className="loginwrapper">
					<LoginForm />
				</div>
				:
				<>
				<Header />
				<Main>
					<AppRouter />
				</Main>
				<Footer />
				</>
			}
		</>
	)
}