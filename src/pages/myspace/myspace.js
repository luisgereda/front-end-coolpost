import React from "react";
import { selectToken, selectUser } from "../../store/user/selectors";
import { useSelector } from "react-redux";
import { useState } from "react";
import SpaceForm from "./myspaceform";
import SpaceCard from "../../components/storyCard/storycard";
import StoryDetails from "./myspacedetails";
import EditSpace from "./editMyspace";

export default function MySpace() {
  const token = useSelector(selectToken);
  const [form, setForm] = useState(false);
  const user = useSelector(selectUser);
  const [form2, setForm2] = useState(false);

  return (
    <div>
      {!user.space ? (
        ""
      ) : (
        <SpaceCard
          key={user.space.id}
          id={user.space.id}
          title={user.space.title}
          description={user.space.description}
          backgroundColor={user.space.backgroundColor}
          color={user.space.color}
          show={false}
        />
      )}

      <div>
        {!token ? (
          <h1>please logIn</h1>
        ) : (
          <div>
            <button
              onClick={(event) => {
                setForm(true);
              }}
            >
              Add a Cool Story bro!
            </button>
            <button
              onClick={(event) => {
                setForm2(true);
              }}
            >
              Edit your Space
            </button>
          </div>
        )}

        {form ? <SpaceForm></SpaceForm> : ""}
        {form2 ? <EditSpace></EditSpace> : ""}
      </div>
      <div>
        {!user.space
          ? ""
          : user.space.stories.map((story) => (
              <StoryDetails
                key={story.id}
                id={story.id}
                name={story.name}
                content={story.content}
                image={story.imageUrl}
              ></StoryDetails>
            ))}
      </div>
    </div>
  );
}
