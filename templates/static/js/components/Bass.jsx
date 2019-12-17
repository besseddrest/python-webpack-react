import React, { Component } from 'react';

export default class Bass extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { bassId } = this.props.match.params;
    if (this.props.basses.length > 1) {
      const item = this.props.basses.find(item => item.id == bassId);

      return (
        <div className="cell auto">
          <h2>{ item.model }</h2>
          <ul className="no-bullet">
            <li><strong>ID:</strong> { item.id }</li>
            <li><strong>Make:</strong> { item.make }</li>
            <li><strong>Color:</strong> { item.color }</li>
          </ul>
        </div>
      )
    }

    return null;
  }
};