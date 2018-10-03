import React from "react";

import { scaleTime } from "d3-scale";
import { utcDay } from "d3-time";

import { ChartCanvas, Chart } from "react-stockcharts";
import { CandlestickSeries } from "react-stockcharts/lib/series";
import { XAxis, YAxis } from "react-stockcharts/lib/axes";
import { fitWidth } from "react-stockcharts/lib/helper";
import { last, timeIntervalBarWidth } from "react-stockcharts/lib/utils";

class CandleStickChart extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      chartData: []
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data && JSON.stringify(nextProps.data) !== JSON.stringify(this.props.data)) {
      const chartData = this.props.data.close.map((item, key) => {
        return {
          close: item,
          high: this.props.data.high[key],
          low: this.props.data.low[key],
          open: this.props.data.open[key],
          date: this.props.data.ts[key]
        }
      });
      this.setState({ chartData })
    }
  }

  render() {
    const { chartData } = this.state;
    const xAccessor = d => {
      return d.date
    };
    const xExtents = [
      xAccessor(last(chartData)),
      xAccessor(chartData[chartData.length - 100])
    ];
    return (
      <ChartCanvas
        height={400}
        ratio={1}
        width={799}
        margin={{ left: 50, right: 50, top: 10, bottom: 30 }}
        type={'hybrid'}
        seriesName="MSFT"
        data={chartData.length > 0 && chartData}
        xAccessor={xAccessor}
        xScale={scaleTime()}
        xExtents={xExtents}
      >

        <Chart id={1} yExtents={d => [d.high, d.low]}>
          <XAxis axisAt="bottom" orient="bottom" ticks={6}/>
          <YAxis axisAt="left" orient="left" ticks={5} />
          <CandlestickSeries width={timeIntervalBarWidth(utcDay)}/>
        </Chart>
      </ChartCanvas>
    );
  }
}

CandleStickChart.defaultProps = {
  type: "svg",
};
CandleStickChart = fitWidth(CandleStickChart);

export default CandleStickChart;