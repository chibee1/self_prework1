import React from 'react';

var options = {
       year: "numeric",
       month: "short",
       day: "numeric"
   };

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString(navigator.language, {hour: '2-digit', minute:'2-digit'}),
      date: new Date().toLocaleString("en",options)
    };
  }

  componentDidMount() {
   this.intervalID = setInterval(
     () => this.tick(),
     1000,
   );
 }

 componentWillUnmount() {
   clearInterval(this.intervalID);
 }

 tick() {
   this.setState({
     time: new Date().toLocaleString(navigator.language, {hour: '2-digit', minute:'2-digit'}),
     date: new Date().toLocaleString("en",options)
   });
 }

  render() {
    return (
          <div className="clock">
            <h2 className="time">{this.state.time}</h2>
            <p className="date">{this.state.date}</p>
          </div>
    );
  }
}

export default Clock;
