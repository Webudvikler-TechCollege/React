import React from "react";
import Style from "./contactPage.module.scss";
import { useForm } from "react-hook-form";
import Image from "../../assets/mapsample.png";

export function ContactForm() {

  // Hent register, errors og handlesubmit fra useForm og sæt options for useForm
  const { register, errors, handleSubmit } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {},
    resolver: undefined,
    context: undefined,
    criteriaMode: "firstError",
    shouldFocusError: true,
    shouldUnregister: true,
  });

  // Når vi submitter formen kører submit funktionen
  const onSubmit = (data, e) => submit(data, e);

  // submit fuktion der resetter formen og console logger vores resultat
  const submit = (data, e) => {
    console.log(data)
    e.target.reset()
  }

  return (
    <section>
      <div className={Style.contactHeader}>
        <h2>Kontakt os</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui,
          quaerat?
        </p>
      </div>
      <section className={Style.contactPage}>
        <div>
          <form className={Style.contactForm} onSubmit={handleSubmit(onSubmit)}>
            <label>Indtast navn</label>

            <input
              name="username"
              ref={register({ required: true, minLength: 2 })}
            ></input>
            {errors.username && "Udfyld gyldigt brugernavn "}

            <label>Indtast email</label>

            <input
              name="email"
              ref={register({ required: true, pattern: /^\S+@\S+\.\S+$/ })}
            ></input>
            {errors.email && "Udfyld gyldig email"}

            <label>Kommentar</label>
            <input name="comment" ref={register({ required: false })}></input>
            <input type="submit"></input>
          </form>
        </div>
        <div>
          <div>
            <b>Adresse</b> <p>Øster uttrup vej 232</p>
          </div>
          <div>
            <b>Telefon</b> <p> +45 61 45 45 78</p>
          </div>
          <img src={Image} alt="map"></img>
        </div>
      </section>
    </section>
  );
}