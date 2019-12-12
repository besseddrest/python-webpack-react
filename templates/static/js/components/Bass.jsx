import React, { Component } from 'react';

export default class Bass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    fetch('/basses')
      .then(res => res.json())
        .then((result) => {
          this.setState({
            items: result
          });
        });
  }

  render() {
    const items = this.state.items;

    return (
      <div>
        <header className="header">
          <div className="grid-container">
            <div className="grid-x grid-padding-x">
              <div className="cell">
                <h1>Bass Guitars</h1>
              </div>
            </div>
          </div>
        </header>

        <main className="main">
          <div className="grid-container">
            <div className="grid-x grid-padding-x">
              <ul>
                {
                  items.map((item, i) => (
                    <li key={i}><strong>{item.make}:</strong> {item.model}</li>
                  ))
                }
              </ul>
            </div>
          </div>
        </main>
      </div>
    )
  }
};