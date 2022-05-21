import React, { Component } from 'react';
import '../stylesheets/TTT.css';

class ImpossibleTTT extends Component {

    constructor(){
        super();
        this.state = {
            NE: '',
            N: '',
            NW: '',
            E: '',
            M: '',
            W: '',
            SE: '',
            S: '',
            SW: '',

            turn: 1,
            count: 0
          }
    }

    //start region: algorithm
    componentDidUpdate(){
        if(this.state.turn === 2){
            if(this.state.count === 1){
                if(this.state.NE === 'X' || this.state.NW === 'X' || this.state.SE === 'X' || this.state.SW === 'X'){
                    this.setState({ //
                        M : 'O',
                        turn: 1,
                        count: 2
                    })
                }
            } else {
                //add
                this.setState({
                        turn: 1
                    })
            }
        }
    }
    
    clickDiv = e => {
        let newCount = this.state.count +1;
        if(this.state.turn === 1){
            e.target.innerHTML = 'X'
            this.setState({ //make function for setstate separate
                [e.target.id] : 'X',
                turn: 2,
                count: newCount
            })
        } else {
            console.log("nada")
        }
    }
    //end region: algorithm

    //html
    render() {
        return (
            <div className='tttContainer'>
                <div className='square up left'>
                    <textarea readOnly onClick={this.clickDiv} value={this.state.NW} id="NW"></textarea>
                </div>
                <div className='square up'>
                    <textarea readOnly onClick={this.clickDiv} value={this.state.N} id="N"></textarea>
                </div>
                <div className='square up right'>
                    <textarea readOnly onClick={this.clickDiv} value={this.state.NE} id="NE"></textarea>
                </div>

                <div className='square left'>
                    <textarea readOnly onClick={this.clickDiv} value={this.state.W} id="W"></textarea>
                </div>
                <div className='square'>
                    <textarea readOnly onClick={this.clickDiv} value={this.state.M} id="M"></textarea>
                </div>
                <div className='square right'>
                    <textarea readOnly onClick={this.clickDiv} value={this.state.E} id="E"></textarea>
                </div>

                <div className='square down left'>
                    <textarea readOnly onClick={this.clickDiv} value={this.state.SW} id="SW"></textarea>
                </div>
                <div className='square down'>
                    <textarea readOnly onClick={this.clickDiv} value={this.state.S} id="S"></textarea>
                </div>
                <div className='square down right'>
                    <textarea readOnly onClick={this.clickDiv} value={this.state.SE} id="SE"></textarea>
                </div>
            </div>
        );
    }
}

export default ImpossibleTTT