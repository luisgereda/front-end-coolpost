import React from "react";
import { useDispatch } from "react-redux";
import { deleteStory } from "../../store/user/actions";

export default function StoryDetails(props) {
  const dispatch = useDispatch();

  function deleteThisStory(id) {
    dispatch(deleteStory(id));
  }

  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.content}</h2>
      <img src={props.image}></img>
      {/* <button onClick={deleteThisStory(props.id)}>Delete this Story</button> */}
    </div>
  );
}
