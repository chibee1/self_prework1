import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock.js';
import Message from './Message.js';
import Reddit from './Reddit.js';
import JavaScript from './JavaScript.js';
import Issues from './Issues.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWrench, faCode, faBook, faChartLine, faPencilAlt, faLightbulb, faQuestion } from '@fortawesome/free-solid-svg-icons'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <section className="navi">
          <ul>
            <li><a href="#"><div className="nav-icon-box"><FontAwesomeIcon className="nav-icon" icon={faWrench} /></div>SETTINGS</a></li>
            <li><a href="#"><div className="nav-icon-box"><FontAwesomeIcon className="nav-icon" icon={faCode} /></div>GISTS</a></li>
            <li><a href="#"><div className="nav-icon-box"><FontAwesomeIcon className="nav-icon" icon={faBook} /></div>STACK OVERFLOW</a></li>
            <li><a href="#"><div className="nav-icon-box"><FontAwesomeIcon className="nav-icon" icon={faChartLine} /></div>TRENDING</a></li>
            <li><a href="#"><div className="nav-icon-box"><FontAwesomeIcon className="nav-icon" icon={faPencilAlt} /></div>SCRATCH PAD</a></li>
            <li><a href="#"><div className="nav-icon-box"><FontAwesomeIcon className="nav-icon" icon={faLightbulb} /></div>PLAYGROUND</a></li>
            <li><a href="#"><div className="nav-icon-box"><FontAwesomeIcon className="nav-icon" icon={faQuestion} /></div>HELP/INTRO</a></li>
          </ul>
          <a href="http://initab.com/"><img className="logo" src="./img/initab_logo_white.png"/></a>
          <div className="sns">
            <a href="#"><img className="icon" src="./img/fb.png"/></a>
            <a href="https://github.com/chibee1"><img className="icon" src="./img/github.png"/></a>
          </div>
        </section>

        <section className="reddit">
          <Reddit/>
        </section>

        <section className="javascript">
          <JavaScript/>
          <Clock/>
          <Message/>
        </section>

        <section className="github">
          <Issues />
        <div className="adv">
        </div>
        </section>


      </div>
    );
  }
}

export default App;
