import { apiUrl } from "../../config/constants";
import axios from "axios";

// const fetchedSpaceDetails = (space) => {
//   return {
//     type: "spaces/detail",
//     payload: space,
//   };
// };

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
      console.log(response);
      dispatch(fetchedSpaces(response.data));
    } catch (error) {
      console.log(error.message);
    }
  };
};

// export const spaceDetails = () => {
//   return async (dispatch, gestState) => {
//     try {
//       const response2 = await

//     } catch (e) {
//       console.log(e.message);
//     }
//   };
// };
