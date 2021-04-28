import React, { Component } from 'react'
import logo from './FOOD.png';

export class Footer extends Component {
    render() {
        return (
            <div>

<div className="navbar navbar-expand-lg navbar-dark">
  <a className="navbar-brand ml-5" href="#"> <img src={logo}/>  MEZA <span>FOOD</span></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse " id="navbarColor01">
    <ul className="navbar-nav ml-auto mr-5" >
      <li className="nav-item  mr-3 ">
      <a href="#" className="nav-link"> <i className="fab fa-facebook-square "></i></a>
      </li>
      <li className="nav-item mr-3">
      <a href="#" className="nav-link"><i class="fab fa-twitter-square"></i></a>

      </li>
      <li className="nav-item mr-3">
      <a href="#" className="nav-link"><i class="fab fa-youtube-square"></i></a>

      </li>
      <li className="nav-item mr-3">
      <a href="#" className="nav-link"><i class="fab fa-instagram-square"></i></a>

      </li>
      <li className="nav-item mr-3">
        <a className="nav-link" href="/favori"><i className="fas fa-heart"></i></a>
      </li>
      </ul>
   
      </div>
     </div>
                 {/* <div className="footer ">
                    <a className=" ml-5" href="#"> <img src={logo}/>  MEZA <span>FOOD</span></a>
                   <a href="#" className="nav-link"> <i className="fab fa-facebook-square "></i></a>
                   <a href="#" className="nav-link"><i class="fab fa-twitter-square"></i></a>
                   <a href="#" className="nav-link"><i class="fab fa-youtube-square"></i></a>
                   <a href="#" className="nav-link"><i class="fab fa-instagram-square"></i></a>
                   <a href="#" className="nav-link"><i class="fab fa-twitter-square"></i></a>
                    </div> */}
                
            </div>
        )
    }
}

export default Footer
