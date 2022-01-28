
export const Login = () => {

	const submitLogin = async e => {
		const formdata = new FormData(e.target.form)
		console.log(...formdata);
	}

	return (
		<>
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
				<button type="button" onClick={}>Send</button>
				<button type="reset" onClick={}>Nulstil</button>
			</div>
		</form>
		</>
	);
};