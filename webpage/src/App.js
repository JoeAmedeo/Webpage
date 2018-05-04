import React, { Component } from 'react';
import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Header.js';
import SideBar from './SideBar.js';
import Content from './Content.js';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tabs: [{text: "Projects", link: "/projects"}, 
      {text: "Resume", link: "/resume"},
      {text: "Github", link: "https://github.com/JoeAmedeo"}],
      entries: [
        {
          title: "Hello World",
          body: "Welcome to my website!"
        },
        {
          title: "testing multiples",
          body: "still a test!"
        },
        {
          title: "testing multiples",
          body: "still a test!"
        },
        {
          title: "testing multiples",
          body: "still a test!"
        },
        {
          title: "testing multiples",
          body: "still a test!"
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <Header tabs={this.state.tabs}/>
        <div className="row">
          <div className="col-xs-2"></div>
          <Content entries={this.state.entries}/>
          <div className="col-xs-2"></div>  
        </div>
      </div>
    );
  }
}

export default App;
