import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { remove_reminder } from './action/index';
export class Favori extends Component {
  render() {
    let data = this.props.obj;
    let table = [];
    for (let i = 0; i < data.length; i++) {
      table.push(data[i].data);
    }
    var { hh } = this.props.id;
    console.log('$$$$', hh);
    return (
      <div>
        <div className="row ff mt-3">
          {table.map((resp) => (
            <div className="col-lg-3 col-md-4 col-sm-6" key={resp.idMeal}>
              <div className="card text-white bg-secondary mb-3">
                <img className="card-img-top" src={resp.strMealThumb} alt="" />
                <div className="card-body">
                  <h4 className="card-title">{resp.strMeal}</h4>
                  <p className="card-text">
                    <Link
                      to={'/show/' + resp.idMeal}
                      className="btn btn-danger">
                      show more
                    </Link>
                    <Link
                      to=""
                      onClick={() => this.props.remove_reminder()}
                      className="btn btn-danger m-1">
                      remove all
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

function mapStateToProps(state) {
  return {
    obj: state,
    id: state,
  };
}
export default connect(mapStateToProps, { remove_reminder })(Favori);
