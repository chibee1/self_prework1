import React from 'react';
import './App.css';
import axios from 'axios';

class JavaScript extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      javascript: []
    };
  }

  componentDidMount() {
      axios.get("db.json")
        .then(res => this.setState({ javascript: res.data.javascript }));
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
