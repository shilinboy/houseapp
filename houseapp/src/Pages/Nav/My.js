import React, { Component } from 'react'
import './My.css'

import { Flex, List, } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;

export default class My extends Component {
    constructor() {
        super();

        this.state = {
            iconList: [
                {id:"12"},
                { id: "0", src: "icon_bth1", name: "我的积分" },
                { id: "1", src: "icon_bth2", name: "微聊订阅" },
                { id: "2", src: "icon_bth3", name: "我的联系人" },
                {id:"9"},
                { id: "3", src: "icon_bth4", name: "房贷计算器" },
                { id: "4", src: "icon_bth5", name: "我的房子" },
                {id:"10"},
                { id: "5", src: "icon_bth6", name: "我的看房记录" },
                { id: "6", src: "icon_bth7", name: "我的问答" },
                {id:"11"},
                { id: "7", src: "icon_bth8", name: "设置" },
                { id: "8", src: "icon_bth9", name: "意见反馈" },
            ],
            acc:'登录/注册',
        }
    }
    componentWillMount(){
        if(localStorage.getItem('acc')){
            this.setState({
                acc:localStorage.getItem('acc')
            })
        }
      
    }
    render() {
        return (
            <div>
                <div className='myTop_div'>
                    <div className='top_info_div'>
                        <img style={{ width: "18%" }} src={require('../../assets/imgs/icon_service.png')} />
                        <div className='mycenter_box'>
                            <p onClick={this.clickLogin.bind(this)}>{this.state.acc}</p>
                            <p>可以与经纪人发起聊天</p>
                        </div>
                        <img style={{ width: "7%" }} src={require('../../assets/imgs/icon_set.png')} />
                    </div>
                    <Flex style={{ textAlign: 'center', height: "60px", marginTop: '16px', }}>
                        <Flex.Item className="bottom_box" style={{ color: "#fff" }}>
                            <p>0</p>
                            <p><img style={{ width: "20%" }} src={require('../../assets/imgs/icon_my1 (2).png')} />钱包</p>
                        </Flex.Item>
                        <Flex.Item className="bottom_box" style={{ borderLeft: "1px solid #fff", borderRight: "1px solid #fff", color: "#fff" }}>
                            <p>0</p>
                            <p><img style={{ width: "20%" }} src={require('../../assets/imgs/icon_my1 (3).png')} />优惠</p>
                        </Flex.Item>
                        <Flex.Item className="bottom_box" style={{ color: "#fff" }}>
                            <p>0</p>
                            <p><img style={{ width: "20%" }} src={require('../../assets/imgs/icon_my1 (1).png')} />积分</p>
                        </Flex.Item>
                    </Flex>

                </div>
                <List className="my-list">
                   {
                    this.state.iconList.map(obj => {
                        if(obj.src){
                           return  <Item
                            key={obj.id}
                            thumb={require('../../assets/imgs/'+ obj.src +'.png')}
                            arrow="horizontal"
                            onClick={() => { }}
                        >{obj.name}</Item>
                        }else{
                           return <div key={obj.id} style={{height:'10px',background:"#f4f4f4"}}></div>
                        }
                    })  
                   }
                </List>
            </div>
        )
    }

    clickLogin() {
        if(this.state.acc == '登录/注册'){
            window.location.href = '#/login';
        }
       
    }
}
