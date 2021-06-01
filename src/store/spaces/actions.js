import { apiUrl } from "../../config/constants";
import axios from "axios";

const fetchedSpaces = (spaces) => {
  return {
    type: "spaces/fecthed",
    payload: spaces,
  };
};

export const fetchspaces = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/space`);
      dispatch(fetchedSpaces(response.data));
    } catch (error) {
      console.log(error.message);
    }
  };
};
