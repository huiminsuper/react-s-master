import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Redirect, browserHistory  } from 'react-router';
import { Provider } from 'react-redux';
import store from './redux/store';

// 引入单个页面(包括嵌套的子页面)
import Main from './main'
import Login from './pages/login'
import Home from './pages/home'
import List from './pages/list';
import Report from './pages/report';
import Option1 from './pages/option1';
import Option2 from './pages/option2';
import User from './pages/user';
import Setting from './pages/setting';
import NotFoundPage from './pages/notFound'

// 配置路由，并将路由注入到id为 app 的DOM元素中
ReactDOM.render(
      // <Provider store={store} >
      <Router history={browserHistory}>
            <Route path="/" component = {Login} />
            <Route path="/main"  component = {Main} >
                  {/* <IndexRoute component = {Home} /> */}
                  <Route path="/home" component={Home}/>
                  <Route path="/list" component = {List} />
                  <Route path="/report" component = {Report} />
                  <Route path="/option1" component = {Option1} />
                  <Route path="/option2" component = {Option2} />
                  <Route path="/user" component = {User} />
                  <Route path="/setting" component = {Setting} />
                  {/* 404 */}
                  <Route path="/404" component = {NotFoundPage} />
                  {/* 其他重定向到 404 */}
                  <Route from="*" to="/404" />
            </Route>
      </Router>
      // </Provider>
      , document.querySelector('#app')
)