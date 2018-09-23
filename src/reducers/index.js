import { combineReducers } from 'redux';
import HomePageReducer from './Home';

const RootReducer = combineReducers({
    home: HomePageReducer
});

export default RootReducer;