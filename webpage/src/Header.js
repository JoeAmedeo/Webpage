import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function HeaderTab(props) {
    return (
        <li><a href={props.value.link}>{props.value.text}</a></li>
    );
}

class Header extends Component {

    constructor(props){
        super(props);
    }

  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <ul className="nav navbar-nav">
            {this.props.tabs.map( (tab) =>
              <HeaderTab value={tab}/>
            )}
          </ul>
          <div className="navbar-header navbar-right">
            <a className="navbar-brand" href="">Joe Amedeo</a>
          </div>
        </div>
        
      </nav>
    );
  }
}

export default Header;