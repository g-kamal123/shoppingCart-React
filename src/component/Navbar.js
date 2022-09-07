import { Modal, Switch } from "@mui/material";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Storage } from "./Storage";
import classes from "./styles/Navbar.module.css";

function Navbar() {
  const details = useContext(Storage);
  const [modal, setModal] = useState(false);
  // const [logoutmodal,setLogoutModal] = useState(false)
  const [login, setLogin] = useState(true);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [reguser, setReguser] = useState("");
  const [regpass, setRegpass] = useState("");
  const [cnfpass, setcnfpass] = useState("");
  const [err, setErr] = useState("");
  const [match, setMatch] = useState("");
  return (
    <>
      <div className={classes.navbar}>
        <div className={classes.navlinks}>
          <Link to="/">
            <img src="logo.png" alt="" />
          </Link>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/cart">
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                {Object.keys(details.cartArray).length}
              </Link>
            </li>
            <li onClick={() => setModal(true)} style={{color:'brown',cursor:'pointer'}}>{details.logged?'A1234':'Login'}</li>
            <li>
              <li>
                <Switch
                  defaultChecked={false}
                  color="primary"
                  onChange={(event) => details.background(event.target.checked)}
                />
              </li>
            </li>
          </ul>
        </div>
        <div className={classes.content}>
          <div>
            <h2>Jewellery</h2>
            <span>This RakshaBandhan</span>
            <span>Get 5% off</span>
            <span>on All Items</span>
          </div>
          <img src="img.png" alt="" />
          <img src="img.png" alt="" />
        </div>
      </div>
      <Modal open={modal} onClose={() => setModal(false)}>
        <div
          className={classes.forms}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            padding: "2vw",
            backgroundColor: "whitesmoke",
            width: "20rem",
            border: "1.5px solid black",
            borderRadius: "15px",
          }}
        >
          <div className={classes.log}>
            <span
              id="lg"
              style={{ backgroundColor: `${login ? "orange" : "whitesmoke"}` }}
              onClick={(event) => {
                setLogin(true);
                setErr("");
                setMatch("");
              }}
            >
              Login
            </span>
            <span
              id="sg"
              style={{ backgroundColor: `${!login ? "orange" : "whitesmoke"}` }}
              onClick={(event) => {
                setLogin(false);
                setErr("");
                setMatch("");
              }}
            >
              Sign Up
            </span>
          </div>
          <span
            style={{
              color: `${err === "Registered successfully" ? "green" : "red"}`,
            }}
          >
            {err}
          </span>
          {login && (
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                paddingTop: "4%",
              }}
              onSubmit={(event) => {
                event.preventDefault();
                console.log(regpass);
                if (user === "Ashwin1234" && pass === "1234") {
                  details.login();
                  setPass("");
                  setUser("");
                  setModal(false);
                } else {
                  setErr("username and password not matched");
                  return;
                }
              }}
            >
              <input
                required
                placeholder="username"
                style={{ fontSize: "1.2rem", padding: "2%" }}
                onChange={(event) => setUser(event.target.value)}
              />
              <input
                required
                type={"password"}
                placeholder="password"
                style={{ fontSize: "1.2rem", padding: "2%" }}
                onChange={(event) => setPass(event.target.value)}
              />
              <button
                type="submit"
                style={{
                  width: "fit-content",
                  padding: "1%",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                }}
              >
                Login
              </button>
            </form>
          )}

          {!login && (
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                paddingTop: "4%",
              }}
              onSubmit={(event) => {
                event.preventDefault();
                if (regpass !== cnfpass) {
                  return;
                }
                details.register(reguser, regpass);
                setMatch("");
                setErr("Registered successfully");
                setReguser("");
                setRegpass("");
                setcnfpass("");
              }}
            >
              <input
                value={reguser}
                // required
                readOnly
                placeholder="Ashwin1234"
                style={{ fontSize: "1.2rem", padding: "2%" }}
                onChange={(event) => setReguser(event.target.value)}
              />
              {/* <input placeholder="541 st. strret lane 12" required
              style={{ fontSize: "1.2rem", padding: "2%" }}/> */}
              <input
                value={regpass}
                // required
                // type={"password"}
                readOnly
                placeholder="1234"
                style={{ fontSize: "1.2rem", padding: "2%" }}
                onChange={(event) => setRegpass(event.target.value)}
              />
              <span
                style={{
                  color: `${match === "password matched" ? "green" : "red"}`,
                }}
              >
                {match}
              </span>
            </form>
          )}
        </div>
      </Modal>
    </>
  );
}

export default Navbar;
