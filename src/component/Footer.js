import React, { Component } from 'react';
import logo from './FOOD.png';
import drapeau from './flagofmorocco_6454.png';

export class Footer extends Component {
  render() {
    return (
      <div>
        <div className="fo text-center row ">
          <div className="container  col-lg-3">
            <a className="footer-brand " href="/">
              {' '}
              <img className="img" src={logo} alt="logo" /> MEZA
              <span>FOOD</span>
            </a>
          </div>
          <div className=" text col-lg-3 ">
            © 2021 MEZAFOOD <img className="drap" src={drapeau} alt="footer" />
          </div>
          <div className="col-lg-3">
            <a
              className="btn btn-danger btn-floating m-1"
              href="https://www.facebook.com/TheDataDB/"
              role="button">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              className="btn btn-danger btn-floating m-1"
              href="https://twitter.com/TheAudioDB"
              role="button">
              <i className="fab fa-twitter"></i>
            </a>
            <a
              className="btn btn-danger btn-floating m-1"
              href="https://github.com/hananeget/sit-food-react"
              role="button">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
