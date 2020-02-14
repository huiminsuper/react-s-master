import React from 'react';
import { Title } from '../components/Title'
import { Table, Tooltip, Icon } from 'antd';
import api from '../api/index-client';

let debug = 1
// if(debug){

// }

export default class List extends React.Component {
      constructor(props){
            super(props);
      }
      async getData (){
            const resp = await api.get('/getTable/Data');
            console.log('resp :', resp);
      }
      componentDidMount(){
            this.getData();
      }
      render(){
            Mock.mock(/getTableData/,{
                  "data|121-140": [{
                      "key|+1":1,
                      "name":"@name",
                      "sex|1":["男","女"],
                      "age":"@integer(22, 60)",
                      "email":"@email"
                  }]
              }) 
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
            return(
                  <div>
                        { Title("Android 子导航一(表格)") }
                        <Table columns={columns} dataSource={data} />
                  </div>
            )
      }
}