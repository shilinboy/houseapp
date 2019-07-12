import React, { Component } from 'react'
import citylist from '../SelectCity.json'

import BScroll from 'better-scroll'

import './SelectCity.css'


export default class SelectCity extends Component {
    constructor() {
        super();
        this.state = {
            list: citylist.city,
        }
    }
    render() {
        return (
            <div className='select_box'>

                {/* 右边 */}
                <div  onTouchMove={this.touchmove.bind(this)} style={{ position: "fixed", width: "20px", top: "25%", right: "0", }}>
                    {
                        this.state.list.map(obj => <p className="s_box_list"  key={obj.title} style={{ margin: "4px 0" }}>{obj.title}</p>)
                    }
                </div>
                
                {/* 左边 */}
                <div id='city_info' style={{ position: "fixed", top: 0, height: "100%", overflow: "auto", width: "94%" }}>
                    <ul className='content' style={{ padding: "0" }}>
                        {
                            this.state.list.map(obj => <div className='cityBig_div'>

                                <div className='city_continer'>
                                    <div id={obj.title} className='cityname_box'>
                                        <p className='cityTitle'>{obj.title}</p>
                                        <div className='cityname'>
                                            {
                                                obj.lists.map(obj => <div>{obj}</div>)
                                            }
                                        </div>
                                    </div>

                                </div>
                            </div>)
                        }
                    </ul>
                </div>
            </div>)
    }
    componentDidMount() {
        /* better_scroll */
        this.select_box = new BScroll("#city_info", {
            click: true, //允许点击事件
        });
    }
    touchmove(e) {
        let curElt = document.elementFromPoint(e.touches[0].clientX, e.touches[0].clientY)
        if (curElt && curElt.className == 's_box_list') {
        
            this.select_box.scrollToElement(document.getElementById(curElt.innerHTML), 300)
        }
      
    }
}
