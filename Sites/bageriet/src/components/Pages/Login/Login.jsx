import { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { doFetch } from '../../../helpers/fetch';
import styles from './Login.module.scss';
import { AppContext } from '../../../context/ContextProvider'

export const Login = props => {

    const {loginData, setLoginData } = useContext(AppContext)
    const onSubmit = (data, e) => sendLoginRequest(data, e);
    const { register, handleSubmit, errors } = useForm();
    const [message, setMessage] = useState("");

    const sendLoginRequest = async (data, e) => {
        e.target.reset();
        let formData = new FormData();
        formData.append('username', data.username);
        formData.append('password', data.password);

        let url = "https://api.mediehuset.net/token";

        let result = await doFetch(url, 'POST', formData);
        handleSessionData(result);
    }

    const handleSessionData = (res) => {
        if(!res.message) {
            setLoginData(res);
            sessionStorage.setItem('token', JSON.stringify(res))
        } else {
            setMessage('Kunne ikke matche brugernavn eller adgangskode');
        }
    }

    const logOut = () => {
        setLoginData([]);
        sessionStorage.removeItem('token');
        setMessage('Du er nu logget ud!');

        let timer = setTimeout(() => {
            setMessage("Indtast Login oplysninger")
            clearTimeout(timer);
        }, 3500)
    }



    return (
        <div className={`container ${styles.wrapper}`}>
            <h1>Login</h1>

            <p>{message}</p>

            {!loginData && !loginData.username ?  

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <input type="text" id="username" name="username" placeholder="Brugernavn" ref={register({required: true})} />
                        {errors.fullname && errors.fullname.type === 'required' && <span>Du skal indtaste dit brugernavn</span>}
                    </div>
                    <div>
                        <input type="password" id="password" name="password" placeholder="Adgangskode" ref={register({required: true})} />
                        {errors.email && <span>Du skal indtaste din adgangskode</span>}
                    </div>
                    <div>
                        <button type="reset">Annuller</button>
                        <button type="submit">Send</button>
                    </div>
                </form> :
                <form>
                    <p>Du er logget ind som {loginData.username}</p>
                    <button onClick={() => {logOut()}}>Log ud</button>
                </form>
            }
        </div>
    )
}