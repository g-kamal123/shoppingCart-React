import React from "react";
import classes from "./styles/Navbar.module.css";

function Navbar() {
  return (
    <div className={classes.navbar}>
      <div className={classes.navlinks}>
        <a>
          <img src="logo.png" alt="" />
        </a>
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Cart</a>
          </li>
        </ul>
      </div>
      <div className={classes.content}>
        <div>
        <h1>Jewellery</h1>
        <span>Free Multipurpose</span>
        <span> Responsive</span>
        <span>Landing Page 2045</span>
        </div>
          <img src="img.png" alt=""/>
          <img src="img.png" alt=""/>
      </div>
    </div>
  );
}

export default Navbar;
