import { createStore } from "redux";
import { combineReducers } from "redux";
import users from "../modules/users"
const rootReducer = combineReducers({
  users:users
});

const store = createStore(rootReducer);

export default store;