import './App.css';
import Favori from './component/Favori';
import logo from './component/FOOD.png';
import Home from './component/Home';
import Recipe from './component/Recipe';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Footer from './component/Footer';
import Show from './component/Show';

function App() {
  return (
    <BrowserRouter>
      <div classNameName="App">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <Link className="navbar-brand ml-5" href="#">
            {' '}
            <img src={logo} /> MEZA/<span>FOOD</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse " id="navbarColor01">
            <ul className="navbar-nav ml-auto mr-5">
              <li className="nav-item  mr-3 ">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item mr-3">
                <Link className="nav-link" to="/the-recipe">
                  the recipe
                </Link>
              </li>
              <li className="nav-item mr-3">
                <Link className="nav-link" to="/favori">
                  <i className="fas fa-heart"></i>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/the-recipe" exact component={Recipe} />
          <Route path="/favori" exact component={Favori} />

          <Route path="/show/:login" exact component={Show} />
        </Switch>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
