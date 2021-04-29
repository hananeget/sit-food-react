import axios from 'axios';
import React, { Component } from 'react';

export class Show extends Component {
  state = {
    obj: [],
  };
  componentWillMount = () => {
    const login = this.props.match.params.login;
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${login}`)
      .then((res) => {
        this.setState({
          obj: res.data.meals,
        });
      });
  };

  render() {
    return (
      <div className="row">
        {this.state.obj.map((gitDATA) => (
          <div className="col-md-4">
            <div className="card text-white bg-secondary mb-3">
              <img className="card-img-top" src={gitDATA.strMealThumb} alt="" />
              <div className="card-body">
                <h4 className="card-title">{gitDATA.strMeal}</h4>
                <p className="card-text">
                  <a href={gitDATA.idMeal} className="btn btn-danger">
                    show more
                  </a>
                  <a className="favori" href="/favori">
                    <i className="fas fa-heart"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Show;
