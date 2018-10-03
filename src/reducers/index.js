import {combineReducers} from 'redux';
import LoginReducer from './Login';

const RootReducer = combineReducers({
  auth: LoginReducer
});

export default RootReducer;