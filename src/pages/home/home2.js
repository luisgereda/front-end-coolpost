import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { fetchspaces } from "../../store/spaces/actions";
import { selectSpaces } from "../../store/spaces/selector";
import SpaceCard from "../../components/storyCard/storycard";

export default function Home2() {
  const dispatch = useDispatch();
  const spaces = useSelector(selectSpaces);

  useEffect(() => {
    dispatch(fetchspaces());
  }, [dispatch]);

  return (
    <div>
      {spaces.map((space) => {
        return (
          <SpaceCard
            key={space.id}
            id={space.id}
            title={space.title}
            description={space.description}
            backgroundColor={space.backgroundColor}
            color={space.color}
            show={true}
          />
        );
      })}
    </div>
  );
}
