import React, { Component } from 'react';

export class SpanIcon extends Component {
  state = {
    con: 0,
  };
  change = () => {
    this.setState({
      con: +1,
    });
  };
  render() {
    return (
      <div>
        <i className="fas fa-heart"></i>
        <span className="spanIcon">{this.state.con}</span>
      </div>
    );
  }
}

export default SpanIcon;
