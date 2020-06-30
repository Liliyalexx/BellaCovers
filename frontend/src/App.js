import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
}

  return (
    <div className="grid-container">
      <header className = "header">
      <div className = "brand">
        <button onClick="openMenu()">
          &#9776;
        </button>
        <a className="brand-name" href="index.html">Bella Covers</a>
      </div>
      <div className="header-links">
        <a href="cart.html">Cart</a> 
        <a href="signin"> Sign In</a>

      </div>
      </header>
      <aside className="sidebar">
        <h3>
          Shopping categories
        </h3>
        <button className="sidebar-close-button" onclick="closeMenu()">x</button>
        <ul>
          <li>
            <a href="index.html"> Slipcovers for Sofas</a>
          </li>
            <li>
              <a href="index.html"> Slipcovers for Armchairs</a>
            </li>
            <li>
            <a href="index.html"> Slipcovers for Chairs</a>
          </li>
        </ul>
      </aside>

      
      <main className="main">
        <div className="content">
          <ul className = "products">
            <li>
              <div className = "product">
                <img className ="product-image" src="/images/sofa_beige.jpg" alt="product"/>
                <div className="product-name"> 
                  <a href = "product.html">Slipcover for Sofa </a> 
                </div>
                <div className ="product-size"> One Seat</div>
                <div className ="product-price"> $40 </div>
                <div className="product-rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>

            <li>
              <div className = "product">
                <img className ="product-image" src="/images/waves.jpg" alt="product"/>
                <div className="product-name"> 
                  <a href = "product.html">Slipcover for Sofa </a> 
                </div>
                <div className ="product-size"> Two Seat</div>
                <div className ="product-price"> $40 </div>
                <div className="product-rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>

            <li>
              <div className = "product">
                <img className ="product-image" src="/images/fireworks.jpg" alt="product"/>
                <div className="product-name"> 
                  <a href = "product.html">Slipcover for Sofa </a> 
                </div>
                <div className ="product-size"> Two Seat</div>
                <div className ="product-price"> $40 </div>
                <div className="product-rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className = "product">
                <img className ="product-image" src="/images/flowers.jpg" alt="product"/>
                <div className="product-name"> 
                  <a href = "product.html">Slipcover for Sofa </a> 
                </div>
                <div className ="product-size"> Two Seat</div>
                <div className ="product-price"> $40 </div>
                <div className="product-rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className = "product">
                <img className ="product-image" src="/images/waves.jpg" alt="product"/>
                <div className="product-name"> 
                  <a href = "product.html">Slipcover for Sofa </a> 
                </div>
                <div className ="product-size"> Two Seat</div>
                <div className ="product-price"> $40 </div>
                <div className="product-rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className = "product">
                <img className ="product-image" src="/images/waves.jpg" alt="product"/>
                <div className="product-name"> 
                  <a href = "product.html">Slipcover for Sofa </a> 
                </div>
                <div className ="product-size"> Two Seat</div>
                <div className ="product-price"> $40 </div>
                <div className="product-rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>

          </ul>
        </div>
       
      </main>
      <footer className ="footer">
        All right reserved.
      </footer>
    </div>
  );
}

export default App;
