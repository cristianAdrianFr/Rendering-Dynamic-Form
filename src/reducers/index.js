import {combineReducers} from 'redux';
import HomePageReducer from './Home';
import UesrsPageReducer from './Users';

const RootReducer = combineReducers({
  home: HomePageReducer,
  users: UesrsPageReducer
});

export default RootReducer;