import React, { Component } from 'react';
import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './Header.js';
import SideBar from './SideBar.js';
import Content from './Content.js';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tabs: ["Home", "Resume"],
      entries: [
        {
          title: "Hello World",
          body: "Welcome to my website! My name is Joe Amedeo. I am a Software Engineer for Traveler's, currently in the Bond & Specialty Insurance - Claim department."
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <Header tabs={this.state.tabs}/>
        <div className="row">
          <div className="col-xs-2">test</div>
          <Content entries={this.state.entries}/>
          <div className="col-xs-2">test</div>  
        </div>
      </div>
    );
  }
}

export default App;
