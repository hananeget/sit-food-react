import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';

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
      <div>
        {this.state.obj.map((gitDATA) => (
          <div className="row">
            <div className="col-lg-6">
              <img className="card-img-top" src={gitDATA.strMealThumb} alt="" />
            </div>
            <div className="col-lg-6">
              <h2 className="text-danger">
                {gitDATA.strMeal}
                <span className="m-6  for" onClick={this.props.ajouter}>
                  <i className="fas fa-heart"></i>
                </span>
              </h2>
              <h4 className="text-warning">Their components</h4>
              <p>
                {gitDATA.strIngredient1},<br></br>
                {gitDATA.strIngredient2},<br></br>
                {gitDATA.strIngredient3} ,<br></br>
                {gitDATA.strIngredient4},<br></br>
                {gitDATA.strIngredient9} ,<br></br>
                {gitDATA.strIngredient5},<br></br>
                {gitDATA.strIngredient6},<br></br>
                {gitDATA.strIngredient7},<br></br>
                {gitDATA.strIngredient8},<br></br>
                {gitDATA.strIngredient10},<br></br>
              </p>
              <h4 className="text-warning">Preparation method</h4>

              <p> {gitDATA.strInstructions}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

function MapDispatchToProps(dispatch) {
  return {
    ajouter: () => dispatch({ type: 'INC' }),
  };
}
export default connect(null, MapDispatchToProps)(Show);
