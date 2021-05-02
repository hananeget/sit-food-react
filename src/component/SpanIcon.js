import React, { Component } from 'react';
import { connect } from 'react-redux';

export class SpanIcon extends Component {
  render() {
    return (
      <div>
        <i className="fas fa-heart"></i>
        <span className="spanIcon">{this.props.con}</span>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    con: state.connt,
  };
}
export default connect(mapStateToProps)(SpanIcon);
