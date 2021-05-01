import React, { Component } from 'react';

export class Searsh extends Component {
  state = {
    ggg: '',
  };
  handleForm = (e) => {
    this.setState({
      ggg: e.target.value,
    });
  };
  searsh = (event) => {
    event.preventDefault();
    this.props.getSearsh(this.state.ggg);
  };
  render() {
    return (
      <div>
        <div className="container h-100">
          <div className="d-flex  justify-content-center h-100">
            <form className="searchbar" onSubmit={this.searsh}>
              <input
                value={this.state.ggg}
                onChange={this.handleForm}
                className="search_input"
                type="text"
                name=""
                placeholder="Search... "
              />
              <button className="search_icon">
                <i className="fas fa-search"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Searsh;
