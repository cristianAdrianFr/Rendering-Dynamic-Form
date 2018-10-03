import _ from 'lodash';

import {
  PENDING,
  GET_CANDLE_STICK_SUCCESS,
  GET_CANDLE_STICK_FAILED
} from '../../constants/actionType';

const initialState = {
  pending: false,
  chartData: ''
};

const reducer = (state = initialState, action) => {
  let newState = _.cloneDeep(state);
  switch (action.type) {
    case PENDING:
      newState.pending = true;
      return newState;

    case GET_CANDLE_STICK_SUCCESS:
      newState.chartData = action.data.candlestick_data;
      newState.pending = false;
      return newState;

    case GET_CANDLE_STICK_FAILED:
      newState.pending = false;
      return newState;

    default:
      return state;
  }
};

export default reducer;