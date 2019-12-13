import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="header">
        <div className="grid-container">
          <div className="grid-x grid-padding-x">
            <div className="cell auto">
              <div className="top-bar">
                <div className="top-bar-left">
                  <h1><Link to="/">{this.props.heading}</Link></h1>
                </div>
                <div className="top-bar-right">
                  <ul className="menu horizontal">
                    <li><NavLink to="/bass">Basses</NavLink></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}; 