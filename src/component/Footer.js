import React, { Component } from 'react';
import logo from './FOOD.png';

export class Footer extends Component {
  render() {
    return (
      <div>
        <div className="navbar navbar-expand-lg navbar-dark">
          <a className="navbar-brand ml-5" href="#">
            {' '}
            <img src={logo} /> MEZA <span>FOOD</span>
          </a>

          <div className="" id="navbarColor01">
            <ul className="navbar-nav ml-auto mr-5">
              <li className="nav-item  mr-3 ">
                <a href="#" className="nav-link">
                  {' '}
                  <i className="fab fa-facebook-square "></i>
                </a>
              </li>
              <li className="nav-item mr-3">
                <a href="#" className="nav-link">
                  <i class="fab fa-twitter-square"></i>
                </a>
              </li>
              <li className="nav-item mr-3">
                <a href="#" className="nav-link">
                  <i class="fab fa-youtube-square"></i>
                </a>
              </li>
              <li className="nav-item mr-3">
                <a href="#" className="nav-link">
                  <i class="fab fa-instagram-square"></i>
                </a>
              </li>
              <li className="nav-item mr-3">
                <a className="nav-link" href="/favori">
                  <i className="fas fa-heart"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
