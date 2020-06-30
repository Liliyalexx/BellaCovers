import React from 'react';
import data from './data';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './App.css';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';


function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
}

  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className = "header">
      <div className = "brand">
        <button onClick={openMenu}>
          &#9776;
        </button>
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
        <button className="sidebar-close-button" onClick={closeMenu}>x</button>
        <ul>
          <li>
            <a href="index.html"> Slipcovers for Sofas</a>
          </li>
            
        </ul>
      </aside>

      
      <main className="main">
      <Route path="/products/:id" component={ProductScreen} />
      <Route path="/" exact={true} component={HomeScreen} />
         
        
       
      </main>
      <footer className ="footer">
        All right reserved.
      </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
