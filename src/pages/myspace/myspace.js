import React from "react";
import { selectToken } from "../../store/user/selectors";
import { useSelector } from "react-redux";
import { useState } from "react";
import SpaceForm from "./myspaceform";

export default function MySpace() {
  const token = useSelector(selectToken);
  const [form, setForm] = useState(false);

  return (
    <div>
      {!token ? (
        <h1>please logIn</h1>
      ) : (
        <button
          onClick={(event) => {
            setForm(true);
          }}
        >
          Add a Cool Story bro!
        </button>
      )}

      {form ? <SpaceForm></SpaceForm> : ""}
    </div>
  );
}
