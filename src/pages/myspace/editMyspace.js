import { useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSpace } from "../../store/user/selectors";
import { UpdateSpace } from "../../store/user/actions";

export default function EditSpace() {
  const space = useSelector(selectSpace);
  const [title, setTitle] = useState(space.title);
  const [description, setDescrip] = useState(space.description);
  const [backgroundColor, setBack] = useState(space.backgroundColor);
  const [color, setColor] = useState(space.color);
  const dispatch = useDispatch();

  const submit = (event) => {
    event.preventDefault();
    dispatch(UpdateSpace(title, description, backgroundColor, color));
  };

  return (
    <form onSubmit={submit}>
      <label>Title</label>
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      ></input>
      <label>Description</label>
      <input
        type="text"
        value={description}
        onChange={(event) => setDescrip(event.target.value)}
      ></input>
      <label>Background Color</label>
      <input
        type="text"
        value={backgroundColor}
        onChange={(event) => setBack(event.target.value)}
      />
      <label>Color</label>
      <input
        type="text"
        value={color}
        onChange={(event) => setColor(event.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
