import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './Contact.module.scss';

export const Contact = () => {
    const [formStatus, setFormStatus] = useState(false)
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        console.log(data);
        setFormStatus(true)
    }




    return (
        <div className={`container`}>
            <h1>Kontakt os</h1>

            <div className={`grid ${styles.wrapper}`}>
                {!formStatus ? 
                    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <input id="fullname" name="fullname" placeholder="Navn..." ref={register({required: true })} />
                            {errors.fullname && errors.fullname.type === 'required' && <span>Du skal udfylde dit navn</span>}
                            {/*errors.fullname && errors.fullname.type === 'pattern' && <span>Dit navn kan ikke indeholde tal</span>*/}
                        </div>
                        <div>
                            <input id="email" name="email" placeholder="Email..." ref={register({required: true})} />
                            {errors.email && <span>Du skal udfylde din email</span>}
                        </div>
                        <div>
                            <textarea id="message" name="message" placeholder="Besked..." ref={register}></textarea>
                        </div>
                        <div>
                            <button type="submit">Send</button>
                        </div>
                    </form>
                : <p>Din forespørgsel er blevet sendt. Vi henvender os så snart vi har behandlet din forespørgsel</p> 
                }
                <figure>
                    <img src={require('../../Assets/images/map.jpg').default} alt="Map"></img>
                </figure>

            </div>

        </div>
    )
}