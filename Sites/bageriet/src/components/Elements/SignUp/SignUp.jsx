import { useState } from 'react';
import { doFetch } from '../../../helpers/fetch';
import styles from './SignUp.module.scss'

export const SignUp = () => {
    const [mail, setMail] = useState([]);
    const [feedback, setFeedback] = useState([]);

    const submit2Newsletter = async (e) => {

        e.preventDefault()

        let url = "https://api.mediehuset.net/bakeonline/newsletter";
        let formData = new URLSearchParams();
        formData.append('email', mail);
        let result = await doFetch(url, formData, 'POST');

        if(result.error) {
            setFeedback('Mailen er allerede tilmeldt nyhedsbrevet');
        } else {
            setFeedback('Tak for din tilmelding. Du er nu tilmeldt nyhedsbrevet.');
        }

    }

    return (
        <section className={styles.newsletter}>
            <section className="container">
                <h2>Tilmeld dig vores nyhedsbrev</h2>
                <form onSubmit={(e) => {submit2Newsletter(e)}}>
                    <input value={mail} onChange={(e) => {setMail(e.target.value)}} type="email" placeholder="Indtast email" />
                    <button type="submit">Tilmeld</button>
                </form>
                <p>{feedback}</p>
            </section>
        </section>
    )
}