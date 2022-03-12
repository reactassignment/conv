import { combineReducers } from "redux";
import { userReducer,selectedUserReducer} from "./userReducer";
const reducers = combineReducers({
  allUsers: userReducer,
  selectedUser:selectedUserReducer,
});
export default reducers;