import React, { Component } from 'react';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <main className="main">
        <div className="grid-container">
          <div className="grid-x grid-padding-x">
            <div className="cell auto">
              <p>A listing of my music instruments</p>
            </div>
          </div>
        </div>
      </main>
    )
  }
}