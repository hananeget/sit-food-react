import axios from 'axios';
import React, { Component } from 'react';
import Searsh from './Searsh';
import photo from './undraw_cooking_lyxy.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { add_reminder } from './action/index';
export class Home extends Component {
  state = {
    obj: [],
  };
  GitDATAsearch = (data) => {
    if (data !== '') {
      axios
        .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${data}`)
        .then((Response) => {
          this.setState({
            obj: Response.data.meals,
          });
        });
    }
  };

  render() {
    return (
      <div>
        <div className="row ff">
          <div className=" col-lg-6 text-center  d-flex justify-content-center align-items-center ">
            <div className="discription">
              <h2>
                Welcome to<span> MIZA</span>FOOD
              </h2>
              <h5 className="text">
                Looking to cook easily? Simple and well-explained recipes? You
                are on the right site ! All the recipes you will find here have
                been designed to be easy to make: each step is the subject of a
                photo, it is accompanied by detailed explanations . But this
                site is not just a simple list of recipes, you will also find
                tips, tricks, tips and tricks, as well as many other sections
                that revolve around cooking in general.{' '}
              </h5>
            </div>
          </div>
          <div className="col-lg-6">
            <img className="imgSVG" src={photo} alt="imgsvg" />
          </div>
        </div>
        <div className="row mx-5">
          <div className="col-lg-8 ">
            <Searsh getSearsh={this.GitDATAsearch} />
          </div>

          <div>
            <div className="row mt-3">
              {this.state.obj.map((gitDATA) => (
                <div className="col-md-4">
                  <div className="card text-white bg-secondary mb-3">
                    <img
                      className="card-img-top"
                      src={gitDATA.strMealThumb}
                      alt=""
                    />
                    <div className="card-body">
                      <h4 className="card-title">{gitDATA.strMeal}</h4>
                      <p className="card-text">
                        <a
                          href={'show/' + gitDATA.idMeal}
                          className="btn btn-danger">
                          show more
                        </a>
                        <Link
                          className="favori"
                          to="/"
                          onClick={() => this.props.add_reminder(gitDATA)}>
                          <i className="fas fa-heart"></i>
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { add_reminder })(Home);
