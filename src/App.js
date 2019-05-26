import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock.js';
import Message from './Message.js';
import Reddit from './Reddit.js';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     time: 23
  //   };
  // }

  render() {
    return (
      <div className="App">
        <section className="navi">
          <ul>
            <li><a href="#">SETTINGS</a></li>
            <li><a href="#">GISTS</a></li>
            <li><a href="#">STACK OVERFLOW</a></li>
            <li><a href="#">TRENDING</a></li>
            <li><a href="#">SCRATCH PAD</a></li>
            <li><a href="#">PLAYGROUND</a></li>
            <li><a href="#">HELP/INTRO</a></li>
          </ul>
          <a href="http://initab.com/"><img className="logo" src="../img/initab_logo_white.png"/></a>
          <div className="sns">
            <a href="#"><img className="icon" src="../img/fb.png"/></a>
            <a href="https://github.com/chibee1"><img className="icon" src="../img/github.png"/></a>
          </div>
        </section>

        <section className="reddit">
          <h3 className="header">POPULAR ON R/JAVASCRIPT</h3>
          <Reddit/>
        </section>

        <section className="javascript">
          <h3 className="header">RELEVANT JAVASCRIPT HISTORY</h3>
          <div className="time">
          <Clock/>
          </div>
          <Message/>
        </section>

        <section className="github">
          <h3 className="header">GITHUB ISSUES HISTORY</h3>
        <div className="adv">
        </div>
        </section>


      </div>
    );
  }
}

export default App;
