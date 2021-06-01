import React from "react";

export default function Stories(props) {
  return (
    <div className="container">
      <h1>{props.name}</h1>
      <h2>{props.content}</h2>
      <img src={props.image}></img>
    </div>
  );
}
