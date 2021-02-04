import React from "react";
import "./footer.css";
export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footerTopContainer">
          <div className="topFooter1">
            <h4>get more out of your Membership</h4>
            <span>
              Subscribe to save with daily shocking values, club updates and
              more!
            </span>
          </div>
          <div className="topFooter2">
            <h4>Subscribe to our Newsletter</h4>
            <div className="wrapper">
              <input placeholder="email address"></input>
              <button>Subscribe</button>
            </div>
          </div>
        </div>

        <div className="footerBottomContainer">
          <div className="bottomFooter1">
            <ul>
              <li>Membership</li>
              <li>Shipping & Delivery</li>
              <li>Help</li>
              <li>Resources</li>
            </ul>
          </div>
          <div className="bottomFooter2">
            <ul>
              <li>Site Directory</li>
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
              <li>About Our Ads</li>
              <li>Twitter</li>
              <li>Pin interest</li>
            </ul>
            <span>© 2000-2015, ABC, Inc. All rights reserved</span>
          </div>
        </div>
      </div>
    </div>
  );
}
