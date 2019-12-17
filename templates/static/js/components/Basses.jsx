import React, { Component } from 'react';
import { HashRouter, Route, hashHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/bassesActions';
import Bass from './Bass';

// TODO:
// - Is it appropriate to connect this Component to only the applicable data?

class Basses extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      .then(result => {
        this.setState({ isLoading: false })
        this.props.getBasses(result);
      })
      .catch(error => this.setState({ 
          error, 
          isLoading: false
        })
      );
  }

  render() {
    const { basses } = this.props;
    const { isLoading, error } = this.state;
    let content;

    if (error) {
      content = <p>{error.message}</p>;
    }

    if (isLoading) {
      content =  <p>Loading...</p>;
    }

    if (basses && basses.length > 0) {
      content = <ul>
        {
          basses.map((item, i) => (
            <li key={i}><Link to={"/bass/" + item.id}>{item.model}</Link></li>
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
              <Route path="/bass/:bassId" render={(props) => <Bass {...props} basses={this.props.basses} />} />
            </div>
          </div>
        </main>
      </HashRouter>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    basses: state.basses
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Basses);