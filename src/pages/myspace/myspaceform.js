import { useState } from "react";
import React from "react";
import { useDispatch } from "react-redux";
import { postStory } from "../../store/user/actions";
import { useSelector } from "react-redux";
import { selectMessage } from "../../store/appState/selectors";
import { setMessage } from "../../store/appState/actions";

export default function SpaceForm() {
  const dispatch = useDispatch();
  const message = useSelector(selectMessage);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const submit = (event) => {
    event.preventDefault();
    dispatch(postStory(name, content, image));
    dispatch(setMessage("aa", "ass", "sfsdf"));
    setName("");
    setContent("");
    setImage("");
  };

  return (
    <div>
      <form onSubmit={submit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <label>Content:</label>
        <input
          type="text"
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
        <label>imageUrl:</label>
        <input
          type="text"
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {image ? <img src={image} alt="preview" thumbnail /> : null}

      {message ? <p>Story posted</p> : null}
    </div>
  );
}
