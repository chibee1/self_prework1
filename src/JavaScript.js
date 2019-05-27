import React from 'react';
import './App.css';

class JavaScript extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      javascript: []
    };
  }

  componentWillMount(){
    this.fetchResponse();
  }

  fetchResponse(){
    fetch('http://localhost:3001/javascript')
    .then( res => res.json() )
    .then( res => {
      console.log(res);
      this.setState({
        javascript : res
      });
    })
  }

  render() {
    return (
      <div className="js-wrapper">
        <h3 className="header">RELEVANT JAVASCRIPT HISTORY</h3>
          {this.state.javascript.map( javascript => (
                <div className="js-entry" key={javascript.id}>
                  <p>{javascript.title}<span>{javascript.date}</span></p>
                </div>
            ))}
      </div>
    );
  }
}

export default JavaScript;
