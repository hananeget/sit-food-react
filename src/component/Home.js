import axios from 'axios';
import React, { Component } from 'react';
import Searsh from './Searsh';
import photo from './undraw_cooking_lyxy.png';

export class Home extends Component {
  state = {
    obj: [],
  };
  GitDATAsearch = (data) => {
    if (data != '') {
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
            <div>
              <h2>Example body text</h2>
              <p>
                Nullam quis risus eget vel eu leo. Cum sociis natoque penatibus
                et magnis dis parturient montes, nascetur ridiculus mus. Nullam
                id dolor id nibh ultricies vehicula. This line of text is meant
                to be treated as fine print. The following is{' '}
                <strong>rendered as bold text</strong>. The following is{' '}
                <em>rendered as italicized text</em>. An abbreviation of the
                word attribute is <abbr title="attribute">attr</abbr>.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <img className="imgSVG" src={photo} />
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
