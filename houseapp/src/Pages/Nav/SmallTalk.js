import React, { Component } from 'react'
import {Button} from 'antd-mobile'
import { connect } from 'react-redux'
var box_div={ height:'100%',background:"#F6F6FA",display:'flex',justifyContent:"center",alignItems:'center'}
   
var content_div={width:'300px',height:'240px',background:'#fff',display:'flex',justifyContent:"center", flexWrap:'wrap',alignItems:'center',borderRadius:'5px'}


class SmallTalk extends Component {
    render() {
        return (
            <div style={box_div}>
                <div style={content_div}>
                    <p style={{textAlign:"center"}}><img style={{width:"60%"}} src={require('../../assets/imgs/icon_service.png')}/></p>
                    <p style={{width:'100%',textAlign:'center',height:'20px',lineHeight:"20px"}}>置业顾问：<span style={{color:"#0065AF"}}>张小妹</span></p>
                    <p style={{width:'100%',textAlign:'center',height:'20px',lineHeight:"20px"}}>专业服务诚信做人诚心做事</p>
                    <Button size='small' type="primary" style={{background:'#0065AF',width:"50%",}}>我要聊天</Button>
                </div>
            </div>
        )
    }

    clickName(){
        this.props.dispatch({
            type:"changeAge",
            newAge:23
        })
    }
}


export default connect()(SmallTalk)