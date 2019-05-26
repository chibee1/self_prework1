import React from 'react';

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
      <div class="reddit-wrapper">
        {this.state.news.map( news => (
              <div class="reddit-entry" key={news.id}>
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
