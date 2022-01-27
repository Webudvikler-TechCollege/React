import { useForm } from 'react-hook-form';
import styles from './Contact.module.scss';

export const Contact = () => {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className={`container`}>
            <h1>Kontakt os</h1>

            <div className={`grid ${styles.wrapper}`}>

                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <input id="fullname" name="fullname" placeholder="Navn..." ref={register({required: true, pattern: /^[A-Za-z]+$/i })} />
                        {errors.fullname && errors.fullname.type === 'required' && <span>Du skal udfylde dit navn</span>}
                        {errors.fullname && errors.fullname.type === 'pattern' && <span>Dit navn kan ikke indeholde tal</span>}
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

                <figure>
                    <img src={require('../../Assets/images/map.jpg').default} alt="Map"></img>
                </figure>

            </div>

        </div>
    )
}