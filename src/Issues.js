import React from 'react';
import './App.css';
import axios from 'axios';

class Issues extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      issues: []
    };
  }

  componentDidMount() {
      axios.get("db.json")
        .then(res => this.setState({ issues: res.data.issues }));
    }

  render() {
    return (
      <div className="issues-wrapper">
        <h3 className="header">GITHUB ISSUES HISTORY</h3>
        <div className="switch"><a>ISSUES</a><a>PULL REQUESTS</a></div>
          {this.state.issues.map( issue => (
                <div className="reddit-entry" key={issue.id}>
                  <p>Repo: {issue.repo}</p>
                  <p>Issue #: {issue.number}</p>
                  <p>{issue.title}</p>
                </div>
            ))}
      </div>
    );
  }
}

export default Issues;
