import { Page } from "../../App/Layout/Layout";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "../../App/Auth/Auth";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { loginData, setLoginData } = useAuth();

  const sendLoginRequest = async (data, e) => {
    e.target.reset();
    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("password", data.password);
    const url = "https://api.mediehuset.net/token";
    const result = await axios.post(url, formData);
    handleSessionData(result);
  };

  const handleSessionData = (res) => {
    if (!res.message) {
      setLoginData(res.data);
      sessionStorage.setItem("token", JSON.stringify(res.data));
    }
  } 

  const logOut = () => {
	  sessionStorage.removeItem('token')
	  setLoginData('')
  }

  return (
    <Page title="Login" description="Her kan du logge ind på vores site">
      {!loginData && !loginData.username ? (
        <form onSubmit={handleSubmit(sendLoginRequest)}>
          <div>
            <input
              type="text"
              id="username"
              placeholder="Indtast brugernavn"
              className="border-2 rounded-sm my-1"
              {...register("username", { required: true })}
            />
            {errors.username && (
              <span className="text-red-600 ml">
                Du skal udfylde dit brugernavn!
              </span>
            )}
          </div>
          <div>
            <input
              type="password"
              id="password"
              placeholder="Indtast adgangskode"
              className="border-2 rounded-sm my-1"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-red-600 ml">
                Du skal udfylde din adgangskode!
              </span>
            )}
          </div>
          <div>
            <button
              className="bg-sky-500 mr-1 py-2 px-4 rounded-md"
              type="submit"
            >
              Login
            </button>
            <button className="bg-amber-500 py-2 px-4 rounded-md" type="reset">
              Nulstil felter
            </button>
          </div>
        </form>
      ) : 
		<div>
			<p>Du er logget ind som <i>{loginData.username}</i></p>
			<button onClick={logOut}>Log ud</button>
		</div>
	  }
    </Page>
  );
};
