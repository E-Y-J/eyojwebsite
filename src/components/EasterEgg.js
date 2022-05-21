import '../stylesheets/EasterEgg.css';

import React, { Component } from 'react';

class EasterEgg extends Component {

    constructor(props){
        super(props);
        this.state = {
            elementStyle: {
                top: "200px",
                left: "200px"
            }
        }
    }

    _onMouseMove(e) {
        if(e.target.className === "egg"){
            if(window.innerHeight <= parseInt(this.state.elementStyle.top.replace('px', ''))+100){
                this.setState({
                    elementStyle:{
                        top: "2px",
                        left: this.state.elementStyle.left
                    }
                })
            }else if(parseInt(this.state.elementStyle.top.replace('px', '')) <= 0){
                this.setState({
                    elementStyle:{
                        top: (window.innerHeight-122).toString() + "px",
                        left: this.state.elementStyle.left
                    }
                })
            }else if(window.innerWidth <= parseInt(this.state.elementStyle.left.replace('px', ''))+100){
                this.setState({
                    elementStyle:{
                        top: this.state.elementStyle.top,
                        left:  "2px"
                    }
                })
            }else if(parseInt(this.state.elementStyle.left.replace('px', '')) <= 0){
                this.setState({
                    elementStyle:{
                        top: this.state.elementStyle.top,
                        left: (window.innerWidth-122).toString() + "px"
                    }
                })
            } else {
                let newTop = (parseInt(this.state.elementStyle.top.replace('px', '')) + e.movementY).toString() + 'px'
                let newLeft = (parseInt(this.state.elementStyle.left.replace('px', '')) + e.movementX).toString() + 'px'
                this.setState({
                    elementStyle:{
                        top: newTop,
                        left: newLeft
                    }
                })
            }
        }
    }

    eggClick = e =>{
        window.alert("cheating ehhhh using the mobile ehhhhh")
    }

    render() {
        return (
            <div className="mainContainer" onMouseMove={this._onMouseMove.bind(this)}>
                THE EGG YOU CAN NEVeR CATCH
                <p className='egg' style={this.state.elementStyle} onClick={this.eggClick}>🥚</p>
            </div>
        );
    }
}

export default EasterEgg