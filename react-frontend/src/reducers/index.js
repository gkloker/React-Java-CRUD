import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import alertReducer from "./alertReducer";

// Method for combine reducers
export default combineReducers({
  products: usersReducer,
  alert: alertReducer
})