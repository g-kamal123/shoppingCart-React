import { Alert, Modal } from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Storage } from "./Storage";
import classes from "./styles/Products.module.css";

function Products() {
  const details = useContext(Storage);
  const [alert,setAlert] = useState(false)
  const nav = useNavigate();
  const [modal, setModal] = useState(false);
  const explore = (val) => {
    // console.log(val)
    details.exploreMorehandler(val);
    setModal(true);
  };
  return (
    <>
      <div className={classes.products}>
        <div className={classes.filter}>
          <h1>Filters</h1>
          <p>
            <input type="checkbox" id="gold" onClick={details.filterHandler} />
            <span>Gold</span>
          </p>
          <p>
            <input
              type="checkbox"
              id="diamond"
              onClick={details.filterHandler}
            />
            <span>Diamonds</span>
          </p>
          <p>
            <input
              type="checkbox"
              id="gemstone"
              onClick={details.filterHandler}
            />
            <span>Gemstone</span>
          </p>
          <p>
            <input
              type="checkbox"
              id="gold_studded"
              onClick={details.filterHandler}
            />
            <span>Gold studded</span>
          </p>
          <h3>Price Range</h3>
          <p> <input type={'radio'} name='radio' onClick={details.lth}/>
          <span>Low to High</span></p>
          <p> <input type={'radio'} name='radio' onClick={details.htl}/>
          <span>High to Low</span></p>
         
          {/* <input
            className={classes.search}
            placeholder="search"
            onChange={details.searchHandler}
            id="search"
          /> */}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            width: "100%",
          }}
        >
          <div
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <input
              id="search"
              style={{
                fontSize: "1.7rem",
                padding: "0.5%",
                maxWidth: "25vw",
                maxHeight: "min-content",
              }}
              placeholder="search an item"
              onChange={details.searchHandler}
            />
          </div>
          <div className={classes.productsarea}>
            {details.printarr.length === 0 && <h1>Serch for another item</h1>}
            {details.printarr.map((item) => (
              <div className={`${classes.productcard} ${details.mode && classes.bckg}`}>
                <img src={item.image} alt="" />
                <hr />
                <div>
                  <span>{item.name}</span>
                  <span>&#8377;{item.price}</span>
                  <p>
                    {item.gender} | {item.type}
                  </p>
                  <button onClick={() => explore(item)}>Explore Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Modal open={modal} onClose={() => setModal(false)}>
        <div className={classes.modal}>
          {details.modalItem.map((item) => (
            <div className={classes.content}>
              <div
                className={classes.closemodal}
                onClick={() => {
                  setAlert(false)
                  setModal(false)}}
              >
                &times;
              </div>
              <img src={item.image} alt="" />
              <div className={classes.textcontent}>
                <p>{item.id}</p>
                <h4>{item.name}</h4>
                <h4>&#8377;{item.price}</h4>
                <Alert severity= {alert? 'success':''}>
                  {alert &&  <span>Added to cart</span>}
                </Alert>
                <button onClick={() => {
                  setAlert(true)
                  details.addToCartHandler(item)}}>
                  add to cart
                </button>
                <button onClick={() => {
                  setAlert(false)
                  nav("/cart")}}>Go to cart</button>
              </div>
            </div>
          ))}
        </div>
      </Modal>
    </>
  );
}

export default Products;
