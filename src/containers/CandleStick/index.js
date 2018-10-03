import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import CandleStick from '../../components/CandleStickComponent';
import { getCandleStickData } from '../../actions/CandleStick';

class CandleStickContainer extends Component {
  componentDidMount() {
    this.props.getCandleStickData()
  }

  render() {
    return (
      <div className={'candle-stick-container'}>
        <CandleStick {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getCandleStickData: () => {
      dispatch(getCandleStickData());
    },
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CandleStickContainer));