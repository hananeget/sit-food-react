
import './App.css';
import Favori from './component/Favori';
import logo from './component/FOOD.png';
import Home from './component/Home';
import Recipe from './component/Recipe';



function App() {
  return (
    <div classNameName="App">
     <nav className="navbar navbar-expand-lg navbar-dark">
  <a className="navbar-brand ml-5" href="#"> <img src={logo}/>  MEZA <span>FOOD</span></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse " id="navbarColor01">
    <ul className="navbar-nav ml-auto mr-5" >
      <li className="nav-item active mr-3 ">
        <a className="nav-link" href="#">Home
        </a>
      </li>
      <li className="nav-item mr-3">
        <a className="nav-link" href="#">the recipe</a>
      </li>
      <li className="nav-item mr-3">
        <a className="nav-link" href="#"><i className="fas fa-heart"></i></a>
      </li>
      </ul>
   
      </div>
     </nav>
     <Home/>
     <Recipe/>
     <Favori/>
     
    </div>
  );
}

export default App;