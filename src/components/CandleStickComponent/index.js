import React, { Component } from 'react';
import CandleStickChart from './ChartComponent';

class CandleStick extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isShowingChart: false
    }
  }

  showChart = () => {
    this.setState({ isShowingChart: !this.state.isShowingChart });
  };

  render() {
    return (
      <div className={'chart-page'}>
        {
          this.state.isShowingChart && <CandleStickChart {...this.props} />
        }
        <button onClick={() => this.showChart()}>Show CandleStick</button>
      </div>
    );
  }
}

export default CandleStick;