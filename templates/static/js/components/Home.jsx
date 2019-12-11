import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <div className="grid-container">
            <div className="grid-x grid-padding-x">
              <div className="cell">
                <h1>It Really Does Go</h1>
              </div>
            </div>
          </div>
        </header>
        <main className="main">
          <div className="grid-container">
            <div className="grid-x grid-padding-x">
              <div className="cell">
                <a className="button" href="/bass">Basses</a>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }
}