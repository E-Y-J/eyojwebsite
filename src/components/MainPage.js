import React, { Component } from 'react';

import call from '../images/call.png';
import mail from '../images/mail.png';
import git from '../images/git.png';
import linkdin from '../images/linkdin.png';

class MainPage extends Component {

    constructor(){
        super();
        this.state = {
          }
    }

    render() {
        return (
            <div className="mainContainer centerVer centerHor">

            <div className='container centerVer centerHor'>
            <h1>ELLIJAH JIMENEZ</h1>
            </div>

            <div className='container colElements centerHor'>
                <div className='contactContainer rowElements'>
                <a className='icon'><img src={call}/></a>
                <a className='textContainer'>+63 917 158 6030</a>
                </div>
                <div className='contactContainer rowElements'>
                <a className='icon'><img src={mail}/></a>
                <a className='textContainer' href = "mailto: ellijahjimenez@outlook.com">ellijahjimenez@outlook.com</a>
                </div>
                <div className='contactContainer rowElements'>
                <a className='icon'><img src={git}/></a>
                <a className='textContainer' href='https://github.com/E-Y-J'  target="_blank" rel="noopener noreferrer">https://github.com/E-Y-J</a>
                </div>
                <div className='contactContainer rowElements'>
                <a className='icon'><img src={linkdin}/></a>
                <a className='textContainer' href='https://www.linkedin.com/in/ellijah-jimenez-9495071b0/'  target="_blank" rel="noopener noreferrer">https://www.linkedin.com/</a>
                </div>
            </div>

            </div>
        );
    }
}

export default MainPage