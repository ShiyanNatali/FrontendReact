import { combineReducers } from "redux";
import users from "./users";
import albums from "./albums";

export default combineReducers({
  users,
  albums,
});
