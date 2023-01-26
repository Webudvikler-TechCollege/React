import { useState } from 'react'
import styles from './Main.module.scss'

export default function FormElements() {
  const [ formElm, setFormElm ] = useState({}, {
	firstname: '...',
	lastname: '...',
	email: '...',
	gender: '...',
	description: '...',
	accept: false
  })

  const registerInput = e => {
	setFormElm(prevState => {
		return { ...prevState, [e.target.name]: e.target.value}
	})
  }

  const registerCheckbox = e => {
	setFormElm(prevState => {
		return { ...prevState, accept: e.target.checked}
	})
  }  

  return (
	<div className={styles.wrapper}>
		<form>
			<h1>Form Elements</h1>
			<div>
				<label htmlFor="firstname">Fornavn</label>
				<input type="text" name="firstname" id="firstname" onChange={registerInput} />
			</div>
			<div>
				<label htmlFor="lastname">Efternavn</label>
				<input type="text" name="lastname" id="lastname" onChange={registerInput} />
			</div>
			<div>
				<label htmlFor="email">Email</label>
				<input type="email" name="email" id="email" onChange={registerInput} />
			</div>
			<div>
				<label htmlFor="description">Profiltekst</label>
				<textarea name="description" id="description" onChange={registerInput}></textarea>
			</div>
			<div>
				<label htmlFor="gender">Køn:</label>
				<select name="gender" id="gender"  onChange={registerInput}>
					<option value="f">Kvinde</option>
					<option value="m">Mand</option>
					<option value="o">Andet</option>
				</select>

			</div>
			<div>
				<label htmlFor="accept">Acceptere betingelser:</label>
				<input type="checkbox" name="accept" onClick={registerCheckbox} />
			</div>

		</form>
		<section>
			<ul>
				<li>Fornavn: { formElm.firstname }</li>
				<li>Efternavn: { formElm.lastname }</li>
				<li>Email: { formElm.email }</li>
				<li>Profiltekst: { formElm.description }</li>
				<li>Gender: { formElm.gender }</li>
				<li>Accept: { formElm.accept ? "Ja" : "Nej" }</li>
			</ul>
			
		</section>
	</div>
  )
}
