import React from 'react';
import './App.css';
import axios from 'axios';

class Reddit extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      news: []
    };
  }

  componentDidMount() {
      axios.get("db.json")
        .then(res => this.setState({ news: res.data.news }));
    }

  render() {
    return (
      <div className="reddit-wrapper">
        <h3 className="header">POPULAR ON R/JAVASCRIPT</h3>
          {this.state.news.map( news =>  (
                <div className="reddit-entry" key={news.id}>
                  <p>{news.title}</p>
                  <p>Posted by: {news.author}</p>
                  <p>Reddit score: {news.score}</p>
                  <p>Link to Comments</p>
                </div>
            ))}
      </div>
    );
  }
}

export default Reddit;
