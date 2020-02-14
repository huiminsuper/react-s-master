import React from 'react'
import { Form, Input, Icon, Checkbox, Button, notification } from 'antd'
import { browserHistory } from 'react-router'

import '../less/login.less'

const FormItem = Form.Item;

class LoginPage extends React.Component {
      constructor(props) {
            super(props);
      }
      handleSubmit = e => {
            e.preventDefault();
            this.props.form.validateFields((err, values) => {
                  console.log('err :', err);
                  console.log('values :', values);
                  if(!err){
                        if(values.userName === 'lovezhm' && values.password === 'lovezhm') {
                              console.log('this.props login :', this.props);
                              // this.props.history.push('/home')
                              browserHistory.push('/home')
                        } else this.openNotificationUserInfo('info');
                  }       
            })
      }
      openNotificationUserInfo(type){
            return notification[type]({ 
                  message: "用户名&密码", // 描述通知标题
                  description: "都是: lovezhm", // 描述通知内容
                  duration: 6.5 // 6.5s 后关闭
            })
      }
      componentDidMount(){
            this.openNotificationUserInfo('info');
      }
      render(){
            const { getFieldDecorator } = this.props.form;
            return (
                  <div id="loginpagewrap">
                        <p>Sign in to React Pro</p>
                        <div id="loginWrap">
                              <Form onSubmit={this.handleSubmit} className="login-form">
                                    <FormItem>
                                          {
                                                // getFieldDecorator('userName', { rules: [{ required: true, message: 'Please input your userName!' }], }) // onChange时校验
                                                getFieldDecorator('userName', { 
                                                      validate: [
                                                            {trigger: "onBlur", rules: [{ required: true, message: 'Please input your userName!' }]},
                                                      ], 
                                                }) // 失去焦点时校验
                                                ( <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="UserName"/> )
                                          }
                                    </FormItem>
                                    <FormItem>
                                          {
                                                // getFieldDecorator('password', { rules: [{ required: true, message: 'Please input your password!' }], }) //onChange时校验
                                                getFieldDecorator('password', { 
                                                      validate: [
                                                            {trigger: "onBlur", rules: [{ required: true, message: 'Please input your password!' }]},
                                                      ], 
                                                }) //失去焦点时校验
                                                ( <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}} />} type="password" placeholder="Password"/> )
                                          }
                                    </FormItem>
                                    <FormItem>
                                          {
                                                getFieldDecorator('remember', { valuePropName: 'checked', initialValue: true, })
                                                (<Checkbox>Remember me</Checkbox>)
                                          }
                                          <Button id="loginBtn" type="primary" htmlType="submit" className="login-form-button" >Login</Button>
                                    </FormItem>
                              </Form>
                        </div>
                  </div>
            )
      }
}
const Login = Form.create({name: '2019/12/10'})(LoginPage);
export default Login;