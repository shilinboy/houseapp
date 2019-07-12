import React, { Component } from 'react'
import { connect } from 'react-redux'
import Like from '../../components/Like'
class Footprint extends Component {
    render() {
       let { history } = this.props;

        return (
            <div style={{padding:"10px 10px 0px 10px",height:'100%',width:"100%"}}>
                <div style={{display:history.length == 0 ? 'bolck':'none',height:'100%',width:"100%",padding:"60% 0 0 0"}}>
                    <h4 style={{fontSize:"18px",textAlign:'center'}}>亲，你还没有浏览记录哟！</h4>
                </div>
               {
                   history.map(obj=><Like key={obj.id}   data={obj} />)
               }
            </div>
        )
    }
}
export default connect((state) => {
    return {
        history: state.history
    }
})(Footprint)