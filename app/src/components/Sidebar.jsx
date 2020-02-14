import React from 'react';
import { browserHistory } from 'react-router';
import { withRouter } from 'react-router-dom'

// 引入Antd
import { Menu, Icon, Switch } from 'antd';
const { SubMenu } = Menu; // 同 const SubMenu = Menu.SubMenu;

export default class Sidebar extends React.Component {
      constructor(props) {
            super(props);
            this.state = { mode: 'inline', theme: 'light', current: '/home' }
      }

      changeMode = value => { // 切换子菜单显示模式
            this.setState({ mode: value ? 'vertical' : 'inline' });
      }
      changeTheme = value => { // 切换菜单主题
            this.setState({ theme: value ? 'dark' : 'light'});
      }
      
      handleClick = e => { // 点击菜单更改当前选择的菜单项
            this.setState({ current: e.key });
            // 点击菜单使用 browserHistory 手动切换页面
            if(e.key === '/home'){ browserHistory.push('/home') }
            else { browserHistory.push(e.key)}
      }
      render(){
            return (
                  <div id="leftMenu">
                        <img src={require('../images/logo.png')} width="50" alt="" id="logo"/>
                        <Menu style={{width: 146}}
                              mode={this.state.mode} 
                              theme={this.state.theme}
                              // defaultSelectedKeys={[this.state.current]}
                              selectedKeys={[window.location.pathname]}
                              onClick={this.handleClick}
                        > 
                         {/* mode 用于切换子菜单显示模式: inline or vertical */}
                              <Menu.Item key="/home"><Icon type="home" /><span>首页</span></Menu.Item>
                              <SubMenu key="sub1" title=
                                    {<span>
                                          <Icon type="android" />
                                          <span>导航一</span>
                                    </span>
                                    }
                              >
                                    <Menu.Item key="/list">子导航一</Menu.Item>
                                    <Menu.Item key="/report">子导航二</Menu.Item>
                              </SubMenu>
                              <SubMenu key="sub2" title=
                                    {<span>
                                          <Icon type="apple" />
                                          <span>导航二</span>
                                    </span>}
                              >
                                    <Menu.Item key="/option1">Option 1</Menu.Item>
                                    <Menu.Item key="/option2">Option 2</Menu.Item>
                              </SubMenu>
                              <Menu.Item key="/user"><Icon type="user" /><span>用户中心</span></Menu.Item>
                              <Menu.Item key="/setting"><Icon type="setting" /><span>系统配置</span></Menu.Item>
                        </Menu>
                        <div className="switch-div"><Switch onChange={this.changeMode} /> Change Mode</div>
                        <div className="switch-div"><Switch onChange={this.changeTheme} /> Change Theme</div>
                  </div>
            )
      }
}
// export default withRouter(Sidebar)