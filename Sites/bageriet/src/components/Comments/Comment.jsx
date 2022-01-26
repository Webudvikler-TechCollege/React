import React from "react";
import Style from "./comments.module.scss";

export function Comment(props) {
  // funktion til at konvertere unix timestamp til lokal date string
  const convertTime = (stamp) => {
    var s = new Date(stamp * 1000).toLocaleDateString("da-DK");
    return s;
  };

  return (
    <div className={Style.comment}>
      <h2>{props.comment.title}</h2>
      <h3>{`Af ${props.comment.user.firstname} ${props.comment.user.lastname}`}</h3>
      <b>{`Dato: ${convertTime(props.comment.created)}`}</b>
      <p>{props.comment.comment}</p>
      {props.comment.user.username === props.username ? (
        <button onClick={() => {props.delete(props.comment.id);}}>
          Slet kommentar
        </button>
      ) : null}
    </div>
  );
}
