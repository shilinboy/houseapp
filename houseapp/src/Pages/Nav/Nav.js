import React, { Component } from 'react'

import { TabBar } from 'antd-mobile';

import Home from './Home';
import Footprint from './Footprint';
import My from './My';
import SmallTalk from './SmallTalk';

export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home',
            tabList: [
                { id: 'home', title: '首页', icon: 'icon_home' },
                { id: 'smalltalk', title: '微聊', icon: 'icon_talk' },
                { id: 'footprint', title: '足迹', icon: 'icon_foot' },
                { id: 'my', title: '我的', icon: 'icon_my' },
            ]

        };
    }
    render() {
        return (
            <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#0065AF"
                    barTintColor="white"
                >
                    {
                        this.state.tabList.map(obj =>
                            <TabBar.Item
                                title={obj.title}
                                key={obj.id}
                                icon={<div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: `url(${require('../../assets/imgs/' + obj.icon + '.png')}) center center /  21px 21px no-repeat`
                                }}
                                />
                                }
                                selectedIcon={<div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: `url(${require('../../assets/imgs/' + obj.icon + '_s.png')}) center center /  21px 21px no-repeat`
                                }}
                                />
                                }
                                selected={this.state.selectedTab === obj.id}

                                onPress={() => {
                                    this.setState({
                                        selectedTab: obj.id,
                                    });
                                }}

                            >
                                {this.renderContent()}
                            </TabBar.Item>
                        )
                    }
                </TabBar>
            </div>
        )
    }
    
    renderContent() {
        switch (this.state.selectedTab) {
            case 'home': return <Home />
            case 'smalltalk': return <SmallTalk />
            case 'footprint': return <Footprint />
            case 'my': return <My />
        }
    }
}
