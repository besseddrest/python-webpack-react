import React, { Component } from 'react';
import { HashRouter, Route, hashHistory, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Bass from './Bass';

export default class Basses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoading: false,
      error: null
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch('/basses')
      .then(response => {
        if(response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong...');
        }
      })
      .then(result => this.setState({
          items: result,
          isLoading: false
        })
      )
      .catch(error => this.setState({ 
          error, 
          isLoading: false
        })
      );
  }

  render() {
    const { items, isLoading, error } = this.state;
    let content;

    if (error) {
      content = <p>{error.message}</p>;
    }

    if (isLoading) {
      content =  <p>Loading...</p>;
    }

    if (items.length > 0) {
      content = <ul>
        {
          items.map((item, i) => (
            <li key={i}><Link to={"/bass/" + i}>{item.model}</Link></li>
          ))
        }
      </ul>
    }

    return (      
      <HashRouter history={ hashHistory }>
        <main className="main">
          <div className="grid-container">
            <div className="grid-x grid-padding-x">
              <div className="cell auto">
                {content}
              </div>
              <Route path="/bass/:bassId" render={(props) => <Bass {...props} items={this.state.items} />} />
            </div>
          </div>
        </main>
      </HashRouter>
    )
  }
};