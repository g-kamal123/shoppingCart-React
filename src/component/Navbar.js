import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Storage } from "./Storage";
import classes from "./styles/Navbar.module.css";

function Navbar() {
  const details = useContext(Storage)
  return (
    <div className={classes.navbar}>
      <div className={classes.navlinks}>
        <Link to='/'>
          <img src="logo.png" alt="" />
        </Link>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/products'>Products</Link>
          </li>
          <li>
            <Link to='/cart'><i class="fa fa-shopping-cart" aria-hidden="true"></i>{Object.keys(details.cartArray).length}</Link>
          </li>
        </ul>
      </div>
      <div className={classes.content}>
        <div>
        <h1>Jewellery</h1>
        <span>This RakshaBandhan</span>
        <span>Get 5% off</span>
        <span>on All Items</span>
        </div>
          <img src="img.png" alt=""/>
          <img src="img.png" alt=""/>
      </div>
    </div>
  );
}

export default Navbar;
