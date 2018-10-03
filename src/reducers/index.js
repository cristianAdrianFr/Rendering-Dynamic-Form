import {combineReducers} from 'redux';
import LoginReducer from './Login';
import CandleStickReducer from './CandleStick';

const RootReducer = combineReducers({
  auth: LoginReducer,
  candleStick: CandleStickReducer
});

export default RootReducer;