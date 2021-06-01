import React from "react";
import { Link } from "react-router-dom";

export default function StoryCard(props) {
  return (
    <div
      className="container"
      style={{ backgroundColor: props.backgroundColor, color: props.color }}
    >
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
      <Link to={`/spaces/${props.id}`}>
        <button>review</button>
      </Link>
    </div>
  );
}
