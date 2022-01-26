import React, { useContext, useState } from 'react'
import Style from './login.module.scss'
import { useForm } from "react-hook-form";
import { doFetch } from '../../helpers/fetch';
import {AppContext} from '../../context/ContextProvider'

export function Login() {

    const {loginData, setLoginData} = useContext(AppContext)

    const [message, setMessage] = useState("Indtast login oplysninger")

    // Tager data fra vores form og kører sendLoginRequest funktion med data
    const onSubmit = (data, e) => sendLoginRequest(data, e);

    // Hent register, handleSubmit og errors fra useForm
    const { register, handleSubmit, errors } = useForm();

    // Sender post login request til API
    const sendLoginRequest = async (data, e) => {
        e.target.reset()
        let formData = new FormData()
        formData.append('username', data.username)
        formData.append('password', data.password)

        let url = 'https://api.mediehuset.net/token';

        console.log(formData)
        let res = await doFetch(url, 'POST', formData)
        handleSessionData(res)
    }

    // funktion til at håndtere vores data token, give fejlbesked og gemme i sessionstorage
    const handleSessionData = (res) => {
        if (!res.message) {
            setLoginData(res)
            console.log(res)
            sessionStorage.setItem('token', JSON.stringify(res))
        }

        if (res.message === "No authorization") {
            setMessage("Forkert brugernavn eller password - prøv igen")
        }
    }

    // funktion til at logge ud - sletter data fra sessionstorage og state
    const logOut = () => {
        setLoginData([])
        sessionStorage.removeItem('token');
        setMessage("Du er nu logget ud")

        let timer = setTimeout(() => {
            setMessage("Indtast login oplysninger")
            clearTimeout(timer)
        }, 3500);
    }

    return (
        <>
            <h4>{loginData && loginData.username ? `Du er logget ind som ${loginData.username}` : message}</h4>

            <form className={Style.loginform} onSubmit={handleSubmit(onSubmit)}>
                <b>Log in</b>
                <label>Username:</label>
                <input name="username" ref={register({ required: true })} />
                    {errors.username && <span>Please fill out username</span>}
                <label>Password:</label>
                <input name="password" type="password" ref={register({ required: true })}></input>
                    {errors.password && <span>Please fill out password</span>}
                {!loginData.user_id &&
                    <button className={Style.loginbtn}>LOG IND</button>
                }
                {loginData && loginData.user_id &&
                    <button onClick={() => {logOut() }} className={Style.logoutbtn}>LOG UD</button>
                }
            </form>
            
        </>
    )
}