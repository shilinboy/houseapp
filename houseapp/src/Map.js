import React, { Component } from 'react'

export default class Map extends Component {
    render() {
        return (
            <div id='myMap' style={{width:"100%",height:"100%"}}></div>
        )
    }

    componentDidMount() {
        //获取用户所在城市信息
        var map = new window.AMap.Map("myMap", {
            resizeEnable: true,
            center: [116.397428, 39.90923],
            zoom: 13
        });
       
            //实例化城市查询类
            var citysearch = new  window.AMap.CitySearch();
            //自动获取用户IP，返回当前城市
            citysearch.getLocalCity( (status, result)=> {
                if (status === 'complete' && result.info === 'OK') {
                    if (result && result.city && result.bounds) {
                        var cityinfo = result.city;
                        var citybounds = result.bounds;
                        
                        //地图显示当前城市
                        map.setBounds(citybounds);  //使用地图
                    }
                } 
            });
        
    }
}
