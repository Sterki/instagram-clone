import { combineReducers } from "redux";
import userReducer from "./userReducer";
import boleanReducer from "./boleanReducer";

export default combineReducers({
  user: userReducer,
  validation: boleanReducer,
});
