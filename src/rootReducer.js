import { combineReducers } from "redux";
import UserslistReducer from "./reducers/UserslistReducer";

export default combineReducers({
  usersList: UserslistReducer
});
