import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Flex, Carousel, Grid } from 'antd-mobile';
import Like from '../../components/Like'
import './Home.css'
import { getInfo } from '../../apis/apis'
import BScroll from 'better-scroll'

const listBtn = Array.from([
    { icon: 'icon_house1', text: '新房' },
    { icon: 'icon_house2', text: '二手房' },
    { icon: 'icon_house3', text: '租房' },
    { icon: 'icon_house4', text: '商铺写字楼' },
    { icon: 'icon_house5', text: '卖房' },
    { icon: 'icon_house6', text: '海外房产' },
    { icon: 'icon_house7', text: '小区房价' },
    { icon: 'icon_house8', text: '问答' },

]).map((_val) => ({
    icon: require('../../assets/imgs/' + _val.icon + '.png'),
    text: _val.text,
}));

const strategyBtn = Array.from([
    { icon: 'icon_ loan', text: '我要贷款' },
    { icon: 'icon_count', text: '房贷计算' },
    { icon: 'icon_knowledge', text: '知识' },
    { icon: 'icon_sweep', text: '扫一扫' },
]).map((_val) => ({
    icon: require('../../assets/imgs/' + _val.icon + '.png'),
    text: _val.text,
}));

class Home extends Component {
    constructor() {
        super();

        this.state = {
            selectVal: '',
            data: ['banner1', 'banner2', 'banner3'],
            imgHeight: 170,
            city: '定位中',
            likeData: [],    //猜你喜欢 数据

        }
    }

    async componentWillMount() {
        let res = await getInfo()
        this.state.likeData = res.data;
    }

    render() {
        return (
            <div style={{ backgroundColor: 'white', height: '100%', }}>

                {/* 搜索栏 */}
                <div className='top_div'>
                    <label className='city' onClick={this.clickCity}>{this.state.city}▼</label>
                    <div className='center_div' onClick={this.clickSearch}>
                        <img src={require('../../assets/imgs/icon_search.png')} />
                        <label >挑好房，上贝壳APP</label>
                    </div>
                    <img onClick={this.clickMap} src={require('../../assets/imgs/icon_map.png')} />
                </div>
                
                <div className='home_box' >
                    <ul className='content' style={{ padding: "0", marginTop: '0' }}>
                        {/* 轮播图 */}
                        <Carousel
                            autoplay
                            infinite
                        >
                            {this.state.data.map(val => (
                                <a
                                    key={val}
                                    href="#"
                                    style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                                >
                                    <img
                                        src={require('../../assets/imgs/' + val + '.jpg')}
                                        alt=""
                                        style={{ width: '100%', verticalAlign: 'top' }}
                                    />
                                </a>
                            ))}
                        </Carousel>
                        {/* 按钮 */}

                        <Grid data={listBtn} activeStyle={false} hasLine={false} />

                        <div className='strategy_div'>
                            <p style={{ fontSize: "18px", color: '#0065AF' }}>房产全百科<span style={{ fontSize: '12px', color: "#848484" }}>专业的买房攻略</span></p>
                            <Grid data={strategyBtn} activeStyle={false} hasLine={false} />
                        </div>
                        <div className='recommend_div'>
                            <h5 style={{ marginBottom: '0', fontSize: '16px' }}>猜你喜欢</h5>
                            {
                                this.state.likeData.map(obj => <div key={obj.id} onClick={this.clickHouse.bind(this, obj)}><Like data={obj} /></div>)
                            }
                        </div>
                    </ul>
                </div>
            </div>
        )
    }

    componentDidMount() {
        /* better_scroll */
        this.home_scroll = new BScroll(".home_box", {
            click: true, //允许点击事件
        });

        //获取用户所在城市信息
        //实例化城市查询类
        var citysearch = new window.AMap.CitySearch();
        //自动获取用户IP，返回当前城市
        citysearch.getLocalCity((status, result) => {
            if (status === 'complete' && result.info === 'OK') {
                if (result && result.city && result.bounds) {
                    var cityinfo = result.city;
                    var citybounds = result.bounds;

                    this.setState({
                        city: cityinfo
                    })
                    //地图显示当前城市
                    // map.setBounds(citybounds);
                }
            }
        });



    }
    /*  */
    clickCity() {
        window.location.href = '#/selectcity'
    }
    clickSearch() {
        window.location.href = '#/search'
    }
    clickMap() {
        window.location.href = '#/map'
    }

    /* 添加历史 */
    clickHouse(obj) {
        // console.log(this.props.history)
        this.props.dispatch({
            type: "addHistory",
            obj
        })
    }
}



export default connect()(Home);