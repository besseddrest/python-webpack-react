import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
              <Link className="button" to="/bass">Basses</Link>
            </div>
          </div>
        </div>
      </main>
    )
  }
}