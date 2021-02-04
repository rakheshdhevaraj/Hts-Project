import React from "react";
import logo from "../assest/logo.png";
import "./header.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
export default function Header() {
  return (
    <header>
      {/* Top Header */}
      <div className="topHeader">
        <div className="container">
          <h4>
            Try <b>Prime Membership</b> Today
            <span style={{ float: "right" }}>Join Now</span>
          </h4>
        </div>
      </div>
      {/* Middle Header */}
      <div className="middleHeader">
        <div className="container">
          <img src={logo}></img>
        </div>
      </div>
      {/* Bottom Header */}
      <div className="bottomHeader">
        <div className="container">
          <div className="row">
            <ul className="left">
              <li>
                <a>Shop </a>
              </li>
              <li>
                <a>Business </a>
              </li>
              <li>
                <a>Services </a>
              </li>
            </ul>
            <div className="headerSearch">
              <input placeholder="search Product"></input>
            </div>
            <ul className="right">
              <li>
                <a>Track Order</a>{" "}
              </li>
              <li>
                <a>Log In</a>{" "}
              </li>
              <li>
                <a style={{ paddingTop: "25px" }}>
                  <ShoppingCartIcon style={{ fontSize: "15px" }} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
