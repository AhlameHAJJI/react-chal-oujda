import { combineReducers } from "redux";
import authReducer from "./authReducer";
import contactUsReducer from "./contactUsReducer";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  contact: contactUsReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});
export default rootReducer;
