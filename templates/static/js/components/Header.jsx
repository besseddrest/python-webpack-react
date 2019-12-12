import React, { Component } from 'react';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="header">
        <div className="grid-container">
          <div className="grid-x grid-padding-x">
            <div className="cell">
              <h1>{this.props.heading}</h1>
            </div>
          </div>
        </div>
      </header>
    )
  }
};