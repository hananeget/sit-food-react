import React, { Component } from 'react';
import logo from './FOOD.png';

export class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer-distributed">
          <div className="footer-left">
            <h3>
              <a className="footer-brand ml-auto" href="/">
                {' '}
                <img className="img" src={logo} alt="logo" /> MEZA
                <span>FOOD</span>
              </a>
            </h3>

            <p className="footer-links">
              <a href="/">Home</a>
              <br />
              <a href="/the-recipe">the recipe</a>·<br />
              <a href="/favori">Favori</a>·
            </p>

            <p className="footer-company-name">MEZAFOOD &copy; 2021</p>
          </div>

          <div className="footer-center">
            <div>
              <i className="fa fa-map-marker"></i>
              <p>
                <span>Solicode</span> Tanger, Moroco
              </p>
            </div>

            <div>
              <i className="fa fa-phone"></i>
              <p>+212 65 123456</p>
            </div>

            <div>
              <i className="fa fa-envelope"></i>
              <p>
                <a href="mailto:support@company.com">contact@MEZAFOOD.com</a>
              </p>
            </div>
          </div>

          <div className="footer-right">
            <p className="footer-company-about">
              <span>About Us</span>
              Looking to cook easily? Simple and well-explained recipes? You are
              on the right site !&amp;.
            </p>

            <div className="footer-icons">
              <a href="https://www.facebook.com/TheDataDB/">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://twitter.com/TheAudioDB">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://github.com/hananeget/sit-food-react">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/hananeget/sit-food-react">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </footer>
        {/* <div className="fo text-center row ">
          <div className="container-fluid  col-lg-3">
            <a className="footer-brand ml-auto" href="/">
              {' '}
              <img className="img" src={logo} alt="logo" /> MEZA
              <span>FOOD</span>
            </a>
          </div>
          <div className=" text col-lg-3 ">
            <p className=" text"> © 2021 MEZAFOOD </p>
          </div>
          <div className="col-lg-3">
            <a
              className="btn btn-danger  m-1"
              href="https://www.facebook.com/TheDataDB/"
              role="button">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              className="btn btn-danger  m-1"
              href="https://twitter.com/TheAudioDB"
              role="button">
              <i className="fab fa-twitter"></i>
            </a>
            <a
              className="btn btn-danger  m-1"
              href="https://github.com/hananeget/sit-food-react"
              role="button">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div> */}
      </div>
    );
  }
}

export default Footer;
