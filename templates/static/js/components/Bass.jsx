import React, { Component } from 'react';

export default class Bass extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { bassId } = this.props.match.params;
    const item = this.props.items[bassId];

    if (item) {
      return (
        <div className="cell auto">
          <p><strong>Name: </strong> { item.model }</p>
          <p><strong>Make: </strong> { item.make }</p>
        </div>
      )      
    }

    return null;
  }
};