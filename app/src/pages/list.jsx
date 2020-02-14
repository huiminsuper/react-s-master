import React from 'react';
import { Title } from '../components/Title'
import { Table, Tooltip, Icon } from 'antd';
import api from '../api/index-client';
import Mock from 'mockjs';

let debug = 1
if(debug){
      Mock.mock('/getTable/Data',{
            "data|121-140": [{
                "key|+1":1,
                "name":"@name",
                "sex|1":["男","女"],
                "age":"@integer(22, 60)",
                "email":"@email"
            }]
        }) 
}

export default class List extends React.Component {
      constructor(props){
            super(props);
            this.state = { data: [] }
      }
      async getData (){
            const resp = await api.get('/getTable/Data');
            console.log('resp :', resp);
           if(resp.status === 200){ this.setState({data: resp.data.data}) }
      }
      componentDidMount(){
            this.getData();
      }
      render(){
            const columns = [
                  { title: '姓名', dataIndex: 'name' },
                  { title: '性别', dataIndex: 'sex' },
                  { title: '年龄', dataIndex: 'age',},
                  { title: '邮箱', dataIndex: 'email', render: text => <a href="#" target="_blank">{text}</a> },
                  { title: '操作', dataIndex: 'handle', render: () => (
                        <span>
                              <tooltip><Icon type="edit" /></tooltip>
                              <tooltip><Icon type="retweet" /></tooltip>
                              <tooltip><Icon type="delete" /></tooltip>
                        </span>
                  ) }
            ];
            const pagination = { // 待分析
                  size:"default",
                  showQuickJumper:true,
                  total: this.state.data.length,
                  showSizeChanger: true,
                  onShowSizeChange: (current, pageSize) => {
                        console.log('Current: ', current, '; PageSize: ', pageSize);
                  },
                  onChange: (current) => {
                        console.log('Current: ', current);
                  },
            }
            return(
                  <div>
                        { Title("Android 子导航一(表格)") }
                        <Table 
                              size="small" 
                              columns={columns} 
                              dataSource={this.state.data}
                              pagination={pagination}
                        />
                  </div>
            )
      }
}