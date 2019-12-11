import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <div className="grid-container">
            <div className="grid-x grid-padding-x">
              <div className="cell">
                <h1><a href="/">It Really Does Go</a></h1>
              </div>
            </div>
          </div>
        </header>
        <main className="main">
          <div className="grid-container">
            <div className="grid-x grid-padding-x">
              <div className="cell">
                <Link className="button" to="/bass">Basses</Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }
}