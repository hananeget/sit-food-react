import React, { Component } from 'react';
import { connect } from 'react-redux';
export class Favori extends Component {
  render() {
    console.log('favori', this.props);
    const { obj } = this.props;

    return (
      <div>
        <div className="row">
          {obj.map((resp) => (
            <div className="col-md-4" key={resp.idMeal}>
              <div className="card text-white bg-secondary mb-3">
                <img className="card-img-top" src={resp.strMealThumb} alt="" />
                <div className="card-body">
                  <h4 className="card-title">{resp.strMeal}</h4>
                  <p className="card-text">
                    <button
                      to={'show/' + resp.idMeal}
                      className="btn btn-danger">
                      show more
                    </button>
                    <button className="favori ">
                      <i className="fas fa-heart"></i>
                    </button>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    obj: state,
  };
}
export default connect(mapStateToProps)(Favori);
