import React, { Component } from 'react'
import './Like.css'

export default class Like extends Component {
    render() {
        let {name,area,type,point,price,range,src,} = this.props.data
        return (
            <div className='like_div'>
                <img src={src} className='goodsImg'/>
                <div className='info_div'>
                    <h5>{name}</h5>
                    <p>{area}<span>{range}</span></p>
                    <p>{type}</p>
                </div>
                <div className='price_div'>{price}/平</div>
            </div>
        )
        
    }
}
