import React from 'react';
import Mock from 'mockjs';
import { Title } from '../components/Title'
import { Card, Row, Col, message } from 'antd'
import { lineData } from '../data/data'
import { LineReact } from '../components/charts/lineReact'

import api from '../api/index-client'
import '../less/home.less'

let debug = 1;
if(debug){
      Mock.mock('/getTodayInfo', {
            "info|4": [{ 
                        "key|1": ['紫外线指数','穿衣指数','感冒指数','洗车指数'],
                        "val|1-7": "★"
                  }]
      })
}
      

export default class Home extends React.Component {
      constructor(props){
            super(props);
            this.state = { info: [] }
      }
      
      async getData(){
            let resp = await api.get('/getTodayInfo');
            if(resp.status === 200){ this.setState({info: resp.data.info}) }
            else { message.error('请求失败！'); }
      }
      componentDidMount(){
            this.getData();
      }
      render(){
            return(
                  <div className="setFlexOne setFlexColumn">
                        { Title("首页") }
                        <Card title="当前生活指数">
                              <Row gutter={16}>
                                    {
                                          this.state.info.map((item, index) => {
                                                return (
                                                      <Col span={6} key={index}>
                                                            <Card>{item.key}: <span className="stars">{item.val}</span></Card>
                                                      </Col>
                                                )
                                          })
                                    }
                              </Row>
                        </Card>
                        <LineReact data={lineData.line} />
                  </div>
            )
      }
}