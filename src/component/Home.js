import axios from 'axios';
import React, { Component } from 'react';
import Searsh from './Searsh';
import photo from './undraw_cooking_lyxy.png';

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
        <div className="row">
          <div className=" col-lg-6 text-center  d-flex justify-content-center align-items-center ">
            <div className="discription">
              <h2>
                Welcome to<span> MIZA</span>FOOD
              </h2>
              <strong>
                Looking to cook easily? Simple and well-explained recipes? You
                are on the right site ! All the recipes you will find here have
                been designed to be easy to make: each step is the subject of a
                photo, it is accompanied by detailed explanations . But this
                site is not just a simple list of recipes, you will also find
                tips, tricks, tips and tricks, as well as many other sections
                that revolve around cooking in general.{' '}
              </strong>
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
            <div className="row">
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
                        <a className="favori" href="/favori">
                          <i className="fas fa-heart"></i>
                        </a>
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

export default Home;
