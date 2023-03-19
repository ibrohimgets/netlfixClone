import React from "react";
import "./footer.scss";
function Footer() {
  return (
    <footer>
      <div className="footer-links">
        <h2 className="title">Questions? Call 1-844-505-2993</h2>
        <div className="row">
          <div className="column">
            <h4>FAQ</h4>
            <ul>
              <li>
                <span>Help Center</span>
              </li>
              <li>
                <span>Account</span>
              </li>
              <li>
                <span>Media Center</span>
              </li>
              <li>
                <span>Investor Relations</span>
              </li>
              <li>
                <span>Jobs</span>
              </li>
            </ul>
          </div>
          <div className="column">
            <h4>Ways to Watch</h4>
            <ul>
              <li>
                <span>Terms of Use</span>
              </li>
              <li>
                <span>Privacy</span>
              </li>
              <li>
                <span>Cookie Preferences</span>
              </li>
              <li>
                <span>Corporate Information</span>
              </li>
              <li>
                <span>Contact Us</span>
              </li>
            </ul>
          </div>
          <div className="column">
            <h4>Redeem Gift Cards</h4>
            <ul>
              <li>
                <span>Netflix Shop</span>
              </li>
              <li>
                <span>Buy Gift Cards</span>
              </li>
              <li>
                <span>Speed Test</span>
              </li>
              <li>
                <span>Legal Notices</span>
              </li>
            </ul>
          </div>
          <div className="column">
            <h4>Only on Netflix</h4>
            <ul>
              <li>
                <span>Do Not Sell or Share My Personal Information</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-logo"></div>
    </footer>
  );
}

export default Footer;
