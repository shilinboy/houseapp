import React, { Component } from 'react'
import { Flex, WhiteSpace, InputItem, WingBlank, Button, Checkbox } from 'antd-mobile';
import { Link } from 'react-router-dom'

import {reg} from '../apis/apis'

const CheckboxItem = Checkbox.CheckboxItem;

export default class Register extends Component {
    constructor() {
        super();
        this.state = {
            tel: '',        //手机号
            pwd: '',        //密码        
            authCode: '',  //验证码
            errorText:"none",
        }
    }
    render() {
        return (
            <div style={{ height: '100%' }}>
                <WhiteSpace size='xl' />
                <WhiteSpace size='xl' />
                <WingBlank>
                    <InputItem
                        placeholder="请输入手机号"
                        value={this.state.tel}
                        type='text'
                        onChange={(val)=> {this.setState({tel:val})}}
                    />
                     <WhiteSpace size="md" />
                    <InputItem
                        placeholder="请输入密码"
                        value={this.state.pwd}
                        type='password'
                        onChange={(val)=> {this.setState({pwd:val})}}
                    />
                     <WhiteSpace size="md" />
                    <InputItem
                        placeholder="请输入验证码"
                        extra='获取验证码'
                        value={this.state.authCode}
                        onChange={(val)=> {this.setState({authCode:val})}}
                    />
                    
                    <CheckboxItem>
                        <p style={{ fontSize: '12px', color: "#bbb" }}>我已同意<span style={{ color: "#0065AF" }}>《用户服务协议》及《隐私权政策》</span></p>
                    </CheckboxItem>
                    <p style={{color:'red',textAlign:'center',display:this.state.errorText}}>注册失败！</p>
                    <Button onClick={this.clickReg.bind(this)} type="primary" style={{background:'#0065AF'}}>注册</Button>

                    <WhiteSpace size="md" />
                    <Flex justify="between">
                        <Link style={{ color: '#0065AF' }} to='#'>已有账号</Link>
                    </Flex>
                </WingBlank>



            </div>
        )
    }

    /* 点击注册 */
    async clickReg(){
       let res = await reg(this.state.tel,this.state.pwd);

       //判断响应的值
       if(res.data === 'ok'){
           window.location.href = '#/login';
       }else{
            this.setState({
                errorText:'block'
            })
       }
       
    }
}
