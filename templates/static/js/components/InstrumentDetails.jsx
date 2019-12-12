import React, { Component } from 'react';
import Header from './Header';

export default class InstrumentDetails extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <Header heading="This Bass guitar" />
        <main className="main">
          <div className="grid-container">
            <div className="grid-x grid-padding-x">
              <div className="cell auto">
                I am a Bass guitar
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }
};