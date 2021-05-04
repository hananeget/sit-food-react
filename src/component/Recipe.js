import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { add_reminder } from './action/index';

export class Recipe extends Component {
  state = {
    gitdata: [],
  };

  componentDidMount() {
    axios
      .get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
      .then((res) => {
        console.log(res);
        this.setState({
          gitdata: res.data.meals,
        });
      });
  }

  render() {
    return (
      <div>
        <div className="row ff mt-3 d-flex justify-content-center align-items-center">
          {this.state.gitdata.map((resp) => (
            <div className="col-lg-3 col-md-4 col-sm-6" key={resp.idMeal}>
              <div className="card text-white bg-secondary mb-3">
                <img
                  className="card-img-top imagtt"
                  src={resp.strMealThumb}
                  alt=""
                />
                <div className="card-body">
                  <h6 className="card-title">{resp.strMeal}</h6>
                  <p className="card-text">
                    <Link
                      to={'show/' + resp.idMeal}
                      className="btn btn-success">
                      show more
                    </Link>
                    <Link
                      className="favori "
                      to={'/the-recipe/'}
                      onClick={() => this.props.add_reminder(resp)}>
                      <i className="fas fa-heart"></i>
                    </Link>
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

// function MapDispatchToProps(dispatch) {
//   return {
//     ajouter: () => dispatch({add_reminder()}),
//   };
// }
export default connect(null, { add_reminder })(Recipe);
