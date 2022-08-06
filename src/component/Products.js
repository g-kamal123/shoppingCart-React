import { Modal } from "@mui/material";
import React, { useContext, useState } from "react";
import { Storage } from "./Storage";
import classes from "./styles/Products.module.css";

function Products() {
  const details = useContext(Storage);
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
          <input
            className={classes.search}
            placeholder="search"
            onChange={details.searchHandler}
            id="search"
          />
        </div>
        <div className={classes.productsarea}>
          {details.error && <h1>Serch for another item</h1>}
          {details.printarr.map((item) => (
            <div className={classes.productcard}>
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
      <Modal open={modal} onClose={() => setModal(false)}>
        <div className={classes.modal}>
          {details.modalItem.map((item) => (
            <div className={classes.content}>
              <div
                className={classes.closemodal}
                onClick={() => setModal(false)}
              >
                &times;
              </div>
              <img
                src={item.image}
                alt=""
              />
              <div className={classes.textcontent}>
                <p>{item.id}</p>
                <h4>{item.name}</h4>
                <h4>&#8377;{item.price}</h4>
                <button onClick={() => details.addToCartHandler(item)}>
                  add to cart
                </button>
                <button>Go to cart</button>
              </div>
            </div>
          ))}
        </div>
      </Modal>
    </>
  );
}

export default Products;
