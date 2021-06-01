import { apiUrl } from "../../config/constants";
import axios from "axios";

const fetchedSpaceDetails = (stories) => {
  return {
    type: "stories/detail",
    payload: stories,
  };
};

export const spaceDetails = (id) => {
  return async (dispatch, gestState) => {
    try {
      const response2 = await axios.get(`${apiUrl}/space/${id}`);
      console.log(response2.data.space);
      dispatch(fetchedSpaceDetails(response2.data.space));
    } catch (e) {
      console.log(e.message);
    }
  };
};
