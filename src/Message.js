import React from 'react';

const message = "Did you know you can add CUSTOM LINKS to display in this section? Open the SETTINGS panel and add the URLs of your favorites sites to the 'CUSTOM LINKS' textarea.";
const message2 = "Got it! Don't show me this again.";

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: message,
      clicker: message2
    };
  }

 delete() {
   this.setState({
     alert: null,
     clicker: null
   });
 }

  render() {
    return (
      <div>
        <p>{this.state.alert}</p>
        <a href="#" onClick={() => this.delete()}>{this.state.clicker}</a>
      </div>
    );
  }
}

export default Message;
