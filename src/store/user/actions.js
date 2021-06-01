import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectToken, selectUser } from "./selectors";
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
  setMessage,
} from "../appState/actions";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const TOKEN_STILL_VALID = "TOKEN_STILL_VALID";
export const LOG_OUT = "LOG_OUT";

const loginSuccess = (userWithToken) => {
  return {
    type: LOGIN_SUCCESS,
    payload: userWithToken,
  };
};

const deletedStory = (id) => {
  return {
    type: "DELETED_STORY",
    payload: id,
  };
};

const updatedSpace = (newSpace) => {
  return {
    type: "UPDATE_SPACE",
    payload: newSpace,
  };
};

export function createPost(story) {
  return {
    type: "story/createPost",
    payload: story,
  };
}

const tokenStillValid = (userWithoutToken) => ({
  type: TOKEN_STILL_VALID,
  payload: userWithoutToken,
});

export const logOut = () => ({ type: LOG_OUT });

export const signUp = (name, email, password) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.post(`${apiUrl}/signup`, {
        name,
        email,
        password,
      });
      console.log(response);
      dispatch(loginSuccess(response.data));
      dispatch(showMessageWithTimeout("success", true, "account created"));
      dispatch(appDoneLoading());
      //dispatch(updateSpace(response.data.space));
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
      dispatch(appDoneLoading());
    }
  };
};

export const login = (email, password) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.post(`${apiUrl}/login`, {
        email,
        password,
      });
      console.log(response);
      dispatch(loginSuccess(response.data));
      dispatch(showMessageWithTimeout("success", false, "welcome back!", 1500));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
      dispatch(appDoneLoading());
    }
  };
};

export const getUserWithStoredToken = () => {
  return async (dispatch, getState) => {
    // get token from the state
    const token = selectToken(getState());

    // if we have no token, stop
    if (token === null) return;

    dispatch(appLoading());
    try {
      // if we do have a token,
      // check wether it is still valid or if it is expired
      const response = await axios.get(`${apiUrl}/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // token is still valid
      dispatch(tokenStillValid(response.data));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.message);
      } else {
        console.log(error);
      }
      // if we get a 4xx or 5xx response,
      // get rid of the token by logging out
      dispatch(logOut());
      dispatch(appDoneLoading());
    }
  };
};

export const postStory =
  (name, content, image) => async (dispatch, getstate) => {
    const { token, space } = selectUser(getstate());

    const response = await axios.post(
      `${apiUrl}/space/${space.id}/stories`,
      { name, content, image },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    console.log(response);
    dispatch(createPost(response.data.newStory));
  };

export const deleteStory = (id) => async (dispatch, getstate) => {
  const { token, space } = selectUser(getstate());
  const response3 = await axios.delete(
    `${apiUrl}/space/${space.id}/stories/${id}`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  dispatch(deletedStory(id));
};

export const UpdateSpace =
  (title, description, backgroundColor, color) =>
  async (dispatch, getState) => {
    const { token, space } = selectUser(getState());
    const newSpace = await axios.patch(
      `${apiUrl}/space/${space.id}`,
      {
        title,
        description,
        backgroundColor,
        color,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(updatedSpace(newSpace.data.space));
  };
