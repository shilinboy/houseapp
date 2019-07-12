import React, { Component } from 'react'
import { Flex, WhiteSpace, InputItem, WingBlank, Button } from 'antd-mobile';
import { Link } from 'react-router-dom'
import {login} from '../apis/apis'

var logo = { width: '60%', marginTop: '100px' }
var astyle = { color:'#0065AF'}

export default class Login extends Component {
    constructor(){
        super();
        this.state= {
            acc:'',     //用户名
            pwd:'' ,     //密码
            errorText:"none",
        }
    }
    render() {
        return (
            <div>
                <Flex justify="center">
                    <img style={logo} src={require("../assets/imgs/logo2.jpg")} />
                  
                </Flex>
                <WhiteSpace size='lg'/>
                <WhiteSpace size='lg'/>
                <WingBlank size="lg">
                    <InputItem
                        placeholder="用户名"
                        type='text'
                        value={this.state.acc}
                        onChange={(val) => { this.setState({acc:val}) }}
                    >
                        <div style={{ backgroundImage: `url(${require('../assets/imgs/icon-user.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>
                    <WhiteSpace />
                    <InputItem
                        placeholder="密码"
                        type='password'
                        value={this.state.pwd}
                        onChange={(val) => { this.setState({pwd:val}) }}
                    >
                        <div style={{ backgroundImage: `url(${require('../assets/imgs/icon-pwd.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>
                    <p style={{color:'red',textAlign:'center',display:this.state.errorText}}>用户名或密码错误！</p>
                  
                    <Button onClick={this.clickLogin.bind(this)} type="primary" style={{background:'#0065AF'}}>登录</Button>
                    
                    <WhiteSpace size='md'/>
                    <Flex justify="between">
                        <Link style={astyle} to='/reg'>手机快速注册</Link>
                        <Link style={astyle} to='/forgetpwd'>忘记密码</Link>
                    </Flex>
                   
                </WingBlank>
                
                <Flex justify="center" >
                <p style={{position:'absolute',top:'620px',color:"#e3e3e3"}}>登录/注册及代表同意《贝壳房产协议》</p>
                </Flex>
                


            </div>
        )
    }

    /* 点击登录 */
    async clickLogin(){
       let res =  await login(this.state.acc,this.state.pwd)
        //判断响应的值
        if(res.data === 'ok'){
            localStorage.setItem('acc',this.state.acc)
            window.location.href='#/';
        }else{
            this.setState({
                errorText:'block'
            })
        }
       
       
    }
}
