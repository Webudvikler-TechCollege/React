import { useEffect, useState } from "react";
import { Page } from "../../App/Layout/Layout";
import { useForm } from "react-hook-form";
import { useAuth } from "../../App/Auth/Auth";
import axios from "axios";

export const Comments = () => {
  return (
    <Page title="Kommentarer" description="Her kan du læse kommentarer">
      <div className="grid grid-cols-2">
        <div>
          <CommentList />
        </div>
        <div>
          <CommentForm />
        </div>
      </div>
    </Page>
  );
};

export const CommentList = () => {
  const [apiData, setApiData] = useState();
  const { loginData } = useAuth();

  useEffect(() => {
    const getData = async () => {
      const options = {
        headers: {
          Authorization: `Bearer ${loginData.access_token}`,
        },
      };

      const endpoint = "https://api.mediehuset.net/snippets/comments/1";
      const result = await axios.get(endpoint, options);
      setApiData(result.data.items.reverse());
    };
    if (loginData.access_token) {
      getData();
    }
  }, [loginData.access_token]);

  return (
    <div>
      {apiData &&
        apiData.map((item, key) => {
          return <CommentListItem key={key} data={item} />;
        })}
    </div>
  );
};

export const CommentListItem = (props) => {
  const { title, comment, username, created } = props.data;
  return (
    <div className="my-4">
      <h3 className="text-lg">{title}</h3>
      <p>{comment}</p>
      <p>
        <i>{`Indsendt af ${username}, ${created}`}</i>
      </p>
    </div>
  );
};

export const CommentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { loginData } = useAuth();

  const sendData = async data => {
    const endpoint = "https://api.mediehuset.net/snippets/comments";

	const formData = new FormData()
	formData.append('title', data.title)
	formData.append('comment', data.comment)
	formData.append('item_id', 1)
	formData.append('active', 1)

	const options = {
        headers: {
          Authorization: `Bearer ${loginData.access_token}`,
        }
    }
	console.log(options)
	const result = await axios.post(endpoint, formData, options)
	if(result) {

	}

  };

  return (
    <form onSubmit={handleSubmit(sendData)}>
      <div>
        <input
          className="border-2 my-2"
          id="title"
          placeholder="Indtast en titel" 
		  {...register('title', {required: true, maxLength: 5})}
        />
		{errors.title && 
			<span>Du skal indtaste en titel</span>
		}
      </div>
      <div>
        <textarea
          className="border-2 my-2"
          id="comment"
          placeholder="Indtast din kommentar"
		  {...register('comment', {required: true})}
        />
      </div>
      <div>
        <button className="bg-sky-200 px-4 py-2">Send</button>
      </div>
    </form>
  );
};
