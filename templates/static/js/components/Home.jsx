import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header heading="It really does go" />
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