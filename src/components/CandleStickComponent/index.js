import React, { Component } from 'react';

class CandleStick extends Component {
  render() {
    return (
      <div className={'chart-page'}>
        <button onClick={() => console.log('chart-page')}>Show CandleStick</button>
      </div>
    );
  }
}

export default CandleStick;