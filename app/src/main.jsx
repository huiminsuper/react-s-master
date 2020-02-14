import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './components/Sidebar.jsx'
import Topbar from './components/Topbar'

// 引入垫片兼容IE
require('es5-shim');
require('console-polyfill');

// Animate.CSS样式 & font-awesome样式
// 居然没有引用antd的样式文件
import 'animate.css/animate.min.css';
import './less/main.less';
import '../static/iconfont/iconfont.css' // antd icon 图标无网络时显示

// 配置整体组件
export default class Main extends React.Component {
      constructor(props) {
            console.log('props main :', props);
            super(props);
      }
      componentDidMount(){
            window.addEventListener('hashchange',()=>{
                  var currentPath = window.location.hash.slice(1); // 获取输入的路由
                  console.log('currentPath :', currentPath);
                  // if(this.$router.path !== currentPath){
                  //       this.$router.push(currentPath); // 动态跳转
                  // }
            },false);
      }
      render(){
            return (
                  <div>
                        <Sidebar />
                        <div id="rightWrap" className="setFlexColumn">
                              <Topbar />
                              {this.props.children}
                        </div>
                  </div>
            )
      }
}
