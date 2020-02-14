import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';

const menu = (
      <Menu>
            <Menu.Item>
                  <a href="/user">用户中心</a>
            </Menu.Item>
            <Menu.Item>
                  <a href="/setting">系统配置</a>
            </Menu.Item>
            <Menu.Item>
                  <a href="/">退出登陆</a>
            </Menu.Item>
      </Menu>
)
export default class Topbar extends React.Component {
      constructor(props){
            super(props)
      }
      render(){
            let logoutWrap = {
                  textAlign: 'right',
                  paddingRight: 25,
                  borderBottom: '1px solid #ddd',
                  paddingBottom: 15
            }
            return(
                  <div style={logoutWrap}>
                        <Dropdown overlay={menu}>
                              <a className="ant-dropdown-link" href="#">
                                    hello zhm <Icon type="down" />
                              </a>
                        </Dropdown>
                  </div>
            )
      }
}