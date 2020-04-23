import React from 'react'
import './Coin.css'
class Coin extends React.Component{
    render(){
        return(
            <img className="Coin" src={this.props.img.imgSrc} alt={this.props.img.side}></img>
        )
    }
}
export default Coin;