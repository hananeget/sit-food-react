import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
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
    console.log(this.props);
    return (
      <div>
        <div className="row">
          {this.state.gitdata.map((resp) => (
            <div className="col-md-4" key={resp.idMeal}>
              <div className="card text-white bg-secondary mb-3">
                <img className="card-img-top" src={resp.strMealThumb} alt="" />
                <div className="card-body">
                  <h4 className="card-title">{resp.strMeal}</h4>
                  <p className="card-text">
                    <Link to={'show/' + resp.idMeal} className="btn btn-danger">
                      show more
                    </Link>
                    <Link
                      className="favori "
                      to={'/the-recipe'}
                      onClick={this.props.ajouter}>
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

function MapDispatchToProps(dispatch) {
  return {
    ajouter: () => dispatch({ type: 'INC' }),
  };
}
export default connect(null, MapDispatchToProps)(Recipe);
