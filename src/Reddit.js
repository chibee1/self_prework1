import React from 'react';
import './App.css';

class Reddit extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      news: []
    };
  }

  componentWillMount(){
    this.fetchResponse();
  }

  fetchResponse(){
    fetch('http://localhost:3001/news')
    .then( res => res.json() )
    .then( res => {
      console.log(res);
      this.setState({
        news : res
      });
    })
  }

  render() {
    return (
      <div className="reddit-wrapper">
        <h3 className="header">POPULAR ON R/JAVASCRIPT</h3>
          {this.state.news.map( news => (
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
