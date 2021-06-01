import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { spaceDetails } from "../../store/stories/actions";
import { useEffect } from "react";
import { selectDetails } from "../../store/stories/selector";
import Stories from "../../components/storyCard/storydetails";

export default function SpaceDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const space = useSelector(selectDetails);

  useEffect(() => {
    dispatch(spaceDetails(id));
  }, [dispatch, id]);

  return (
    <div>
      <h1>Welcome to {space.title}</h1>
      <p>{space.description}</p>
      {space.stories.map((stories) => (
        <Stories
          key={stories.id}
          name={stories.name}
          content={stories.content}
          image={stories.imageUrl}
        ></Stories>
      ))}
    </div>
  );
}
