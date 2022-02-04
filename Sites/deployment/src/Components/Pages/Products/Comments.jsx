import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { AuthContext } from '../../Auth/AuthProvider'
import { useForm } from 'react-hook-form'

const Comments = () => {
	const { loginData } = useContext(AuthContext)

	return (
		<>
			<h2>Kommentarer</h2>
			<hr />
			{loginData && loginData.username ?
				<>
					<CommentsForm />
					<CommentsList />
				</>
				: <p>Du skal være logget ind for at kommentere</p>
			}
		</>
	)
}

const CommentsList = () => {
	const { loginData } = useContext(AuthContext)
	const [apiData, setApiData] = useState([])
	const { id } = useParams()

	useEffect(() => {
		const getApiData = async () => {
			const options = {
				headers: {
					'Authorization': `Baerer ${loginData.access_token}`
				}
			}
			const url = `https://api.mediehuset.net/bakeonline/comments/${id}`
			const result = await axios.get(url, options)
			setApiData(result.data.items);
		}

		getApiData()
	}, [id])

	const stamp2friendly = stamp => {
		// Request a weekday along with a long date
		let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
		return new Date(stamp * 1000).toLocaleDateString('da-DK', options);
	}

	return (
		<>
			{
				apiData && apiData.length ?
					apiData.map(item => {
						return (
							<CommentListItem
								key={item.id}
								title={item.title}
								username={item.user.username}
								comment={item.comment}
								created={stamp2friendly(item.created)}
							/>
						)
					})
					: <p>Der er endnu ikke skrevet en kommentar til dette produkt</p>
			}
		</>
	);
}

const CommentListItem = props => {
	return (
		<div>
			<p><strong>{props.title}</strong></p>
			<p>{props.comment}</p>
			<p><i>Indsendt af {props.username}, {props.created}</i></p>
			<hr />
		</div>
	)
}

const CommentsForm = () => {
	const { register, handleSubmit, formState: { errors } } = useForm()

	const onSubmit = data => {
		console.log(data);
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<fieldset>
				<legend>Skriv en kommentar</legend>
				<div>
					<label htmlFor='title'>Titel:</label>
					<input id='title' {...register('title', { required: true })} />
					{errors.title && <span>Du skal udfylde en titel!</span>}
				</div>
				<div>
					<label htmlFor='title'>Kommentar:</label>
					<textarea id='comment' {...register('comment', { required: true })} />
					{errors.title && <span>Du skal skrive en kommentar!</span>}
				</div>
				<div>
					<button type='submit'>Send</button>
					<button type="reset">Nulstil felter</button>
				</div>
			</fieldset>
			<hr />
		</form>

	)
}

export { Comments }