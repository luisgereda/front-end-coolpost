import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import spaces from "./spaces/reducer";

export default combineReducers({
  appState,
  user,
  spaces,
});
