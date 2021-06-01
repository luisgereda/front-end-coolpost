import { LOG_OUT, LOGIN_SUCCESS, TOKEN_STILL_VALID } from "./actions";

const initialState = {
  token: localStorage.getItem("token"),
  name: null,
  email: null,
  space: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return { ...state, ...action.payload };

    case LOG_OUT:
      localStorage.removeItem("token");
      return { ...initialState, token: null };

    case TOKEN_STILL_VALID:
      return { ...state, ...action.payload };

    case "DELETED_STORY":
      const id = action.payload;
      const newStories = state.space.stories.filter((story) => story.id !== id);
      return {
        ...state,
        space: { ...state.space, stories: newStories },
      };
    case "story/createPost":
      return {
        ...state,
        space: {
          ...state.space,
          stories: [...state.space.stories, action.payload],
        },
      };
    case "UPDATE_SPACE":
      return {
        ...state,
        space: { ...action.payload, stories: state.space.stories },
      };
    default:
      return state;
  }
};
