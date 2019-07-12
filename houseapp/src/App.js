import React, { Component } from 'react'
import { HashRouter, Switch, Route } from "react-router-dom"

import Nav from './Pages/Nav/Nav'  //导航页
import Login from './Pages/Login'  //登录页
import Register from './Pages/Register'  //注册页
import SelectCity from './Pages/SelectCity'  //选择城市
import ForgetPwd from './Pages/ForgetPwd'  //忘记密码
import Search from './Search'   //搜索
import Map from './Map'   //地图


import store from './store';
import { Provider } from 'react-redux'

export default class App extends Component {
  render() {
    return (
      <div style={{ height: '100%', background: '#fff' }}>
        <Provider store={store}>
            <HashRouter>
              <Switch>
                <Route path="/" exact component={Nav} />
                <Route path="/login" component={Login} />
                <Route path="/reg" component={Register} />
                <Route path="/selectcity" component={SelectCity} />
                <Route path="/forgetpwd" component={ForgetPwd} />
                <Route path="/search" component={Search} />
                <Route path="/map" component={Map} />

                {/* 404跳转 */}
                <Route component={Nav} />
              </Switch>
            </HashRouter>
        </Provider>
      </div>
    )
  }
}



