import React from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import { useSelector } from 'react-redux';



function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
}

  return (
    <BrowserRouter>
    <div className = "grid-container">
      <header className = "header">
      <div className = "brand">
        <button onClick={openMenu}>&#9776;</button>
        <Link to="/">Bella Covers</Link>
      </div>
      <div className="header-links">
        <a href="cart.html">Cart</a> 
        <a href="signin.html"> Sign In</a>

      </div>
      </header>
      <aside className="sidebar">
        <h3>
          Shopping categories
        </h3>
        <button className="sidebar-close-button" onClick={closeMenu}>
            x
          </button>
          <ul className="categories">
            <li>
              <Link to="/category/Slipcovers for Sofa">Slipcovers for Sofa</Link>
            </li>

            <li>
              <Link to="/category/Slipcovers for Armchair">Slipcovers for Armchair</Link>
            </li>
          </ul>
        </aside>

      
      <main className="main">
      <div className="content">
      <Route path='/product/:id' component={ProductScreen} />
      <Route path="/" exact={true} component={HomeScreen} />
      
      </div>
       
      </main>

      <footer className ="footer">
        All right reserved.
      </footer>
    </div>
    </BrowserRouter>

  );
}

export default App;
