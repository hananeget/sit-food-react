import React, { Component } from 'react';
import logo from './FOOD.png';
import drapeau from "./flagofmorocco_6454.png"

export class Footer extends Component {
  render() {
    return (
      <div>
        <div className="fo text-center ">
          <div className="container d-flex ">
            <a className="footer-brand " href="#">
              {' '}
              <img className="img" src={logo} /> MEZA/<span>FOOD</span>
            </a>
            <section className="icon">
              <a className="btn btn-danger btn-floating m-1" href="https://www.facebook.com/TheDataDB/" role="button"><i class="fab fa-facebook-f"></i></a>
              <a className="btn btn-danger btn-floating m-1" href="https://twitter.com/TheAudioDB" role="button"><i class="fab fa-twitter"></i></a>
              <a className="btn btn-danger btn-floating m-1" href="https://github.com/hananeget/sit-food-react" role="button"><i class="fab fa-github"></i></a>
            </section>
          </div>
          <div className=" text text-center p-3" >
            © 2021 MEZA/FOOD   <img className="drap" src={drapeau} />

          </div>
          

        </div>
        
      </div>
    );
  }
}

export default Footer;
