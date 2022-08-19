import { Page } from "../../App/Layout/Layout";
import { useForm } from "react-hook-form";
import { useAuth } from "../../Auth/useAuth";

export const Login = () => {
  const { setLoggedIn } = useAuth((store) => ({
    setLoggedIn: store.setLoggedIn,
  }));

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (submitdata) => {
    const URL = "https://api.mediehuset.net/token";

    try {
      fetch(URL, {
        body: JSON.stringify(submitdata),
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      })
      .then((response) => response.json())
      .then(
        (data) => sessionStorage.setItem("token", JSON.stringify(data)),
        setLoggedIn()
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Page title="Login" description="Her kan du logge ind på vores site">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              type="text"
              id="username"
              placeholder="Indtast brugernavn" 
              {...register("username", { required: true })}
            />
            {errors.username && (
              <span>
                Du skal udfylde dit brugernavn!
              </span>
            )}
          </div>
          <div>
            <input
              type="password"
              id="password"
              placeholder="Indtast adgangskode" 
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span>
                Du skal udfylde din adgangskode!
              </span>
            )}
          </div>
          <div>
            <button type="submit">
              Login
            </button>
            <button type="reset">
              Nulstil felter
            </button>
          </div>
        </form>
    </Page>
  );
};
