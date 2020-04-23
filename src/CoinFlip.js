import React from 'react'
import Coin from './Coin'
import './CoinFlip.css'
class CoinFlip extends React.Component{
    static defaultProps={
        coins:[
            {side:"heads",imgSrc:"https://qph.fs.quoracdn.net/main-qimg-9c81a54813716fccd8e3608ab2f51dcf"},
            {side:"tails",imgSrc:"https://qph.fs.quoracdn.net/main-qimg-148ae81e6fe0500e130fb547026a9b26"}
        ]
    }
    constructor(props){
        super(props);
        this.state={
            currCoin:null,
            total:0,
            head:0,
            tail:0
        }
    }
    flip=()=>{
        let random=Math.floor(Math.random()*2);
        let newCoin=this.props.coins[random];
        this.setState(st=>{
            return{
                currCoin:newCoin,
                total:st.total+1,
                head:(random===0?st.head+1:st.head),
                tail:(random===1?st.tail+1:st.tail)
            };
        })
    }
    render(){
        return(
            <div className="CoinFlip">
                <h1>Let's Flip a Coin!</h1>
                {this.state.currCoin&&<Coin img={this.state.currCoin}/>}
                <center><button onClick={this.flip}>Flip Me!</button></center>
                <p>Out of {this.state.total} flips, there have been {this.state.head} heads and {this.state.tail} tails</p>
            </div>
        )
    }
}
export default CoinFlip;