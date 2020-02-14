import React from 'react'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'

let echarts = require('echarts/lib/echarts')

export class LineReact extends React.Component {
      constructor(props){
            super(props)
      }
      lineInit = () => {
            console.log('this.refs :', this.refs);
            console.log('this.props :', this.props);
            let { data } = this.props;
            let myLineChart = echarts.init(this.refs.lineReact);
            let options = this.getSetOptions(data);
            options.series[1].symbol = 'diamond';
            options.series[1].symbolSize = 8;
            myLineChart.setOption(options);
            window.addEventListener('resize', () => { if(myLineChart) { myLineChart.resize(); } });
      }
      getSetOptions(data){
            return {
                  color: ['#108ee9','#f46e65'],
                  grid: { top: 30, left: '3%', right: '1%' },
                  tooltip: { trigger: 'axis' },
                  legend: { data: ['意向', '成交'], bottm: 0 },
                  xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                  },
                  yAxis: { type: 'value' },
                  series: data
            }
      }
      componentDidMount(){
            this.lineInit();
      }
      componentWillUpdate(){
            this.lineInit();
      }
      render(){
            return (
                  <div className="line-react setFlexOne">
                        <div ref="lineReact" style={{width:'100%', height: '100%'}}></div>
                  </div>
            )
      }
}