import { combineReducers } from "redux";

// Users Reducers
import usersReducer from "./users";

const rootReducer = combineReducers({
  users: usersReducer
});

export default rootReducer;
