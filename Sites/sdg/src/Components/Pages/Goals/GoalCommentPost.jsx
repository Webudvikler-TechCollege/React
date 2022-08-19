import { useForm } from "react-hook-form";
import { AppService } from "../../App/AppServices/AppService";

export const GoalCommentPost = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("comment", data.comment);
    formData.append("goal_id", props.id);
    formData.append("active", 1);
    const result = await AppService.Create(`comments`, formData);
    if(result) {
      console.log('Ok');
    }
  };

  return (
    <div><hr />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="title">Titel</label><br />
          <input type="text" id="title" placeholder="Indtast en titel" {...register('title', {required: true, maxLength: 200})}/>
        </div>
        <div>
          <label htmlFor="comment">Kommentar</label><br />
          <textarea id="comment" {...register('comment', {required: true})}></textarea>
        </div>
        <div>
          <button>Send</button>
        </div>
      </form>
    </div>
  );
};
