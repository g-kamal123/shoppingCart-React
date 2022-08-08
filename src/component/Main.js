import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./styles/Main.module.css";

function Main() {
  const nav = useNavigate()
  return (
    <div className={classes.main}>
      <div className={classes.bestjewellery}>
        <h1>Best jewellery</h1>
        <p>
          a reader will be distracted by the readable content of a page when
          looking at it's layout. The point of using LoremIt is a long
          established fact that a reader will be distracted by the readable
          content of a page when looking at it's layout. The point of using
          Lorem
        </p>
      </div>
      <div className={classes.firstcontent}>
        <div>
          <p>
            a reader will be distracted by the readable content of a page when
            looking at it's layout. The point of using LoremIt is a long
            established fact that a reader will be distracted by the readable
            content of a page when looking at it's layout. The point of using
            Lorem
          </p>
          <button onClick={()=>nav('/products')}>See More</button>
        </div>
        <div className={classes.firstimg}>
          <img src="beimg.png" alt="" />
          <span>best design of ring</span>
        </div>
      </div>

      <div className={classes.secondcontent}>
        <div>
          <p>
            a reader will be distracted by the readable content of a page when
            looking at it's layout. The point of using LoremIt is a long
            established fact that a reader will be distracted by the readable
            content of a page when looking at it's layout. The point of using
            Lorem
          </p>
          <button onClick={()=>nav('/products')}>See More</button>
        </div>
        <div className={classes.firstimg}>
          <img src="beimg2.png" alt="" />
          <span>best design of ring</span>
        </div>
      </div>
      <div className={classes.firstcontent}>
        <div>
          <p>
            a reader will be distracted by the readable content of a page when
            looking at it's layout. The point of using LoremIt is a long
            established fact that a reader will be distracted by the readable
            content of a page when looking at it's layout. The point of using
            Lorem
          </p>
          <button onClick={()=>nav('/products')}>See More</button>
        </div>
        <div className={classes.firstimg}>
          <img src="beimg3.png" alt="" />
          <span>best design of ring</span>
        </div>
      </div>
    </div>
  );
}

export default Main;
