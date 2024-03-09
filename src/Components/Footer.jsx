import React from "react";
import easyreturn from "../assets/easyreturn.AVIF";


const Footer = () => {
  return (
    <>
      <div className="easy-return">
        <img src={easyreturn} alt="" />
      </div>

      <div className="footer-section">
        <div className="logo-side">
          
          <h5>Follow us on:</h5>
          <span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <i className="fa-brands fa-facebook"></i>&nbsp;{" "}
            <i className="fa-brands fa-twitter"></i>
            &nbsp; <i className="fa-brands fa-linkedin"></i>&nbsp;&nbsp;{" "}
            <i className="fa-brands fa-youtube"></i>
            &nbsp; <i className="fa-brands fa-instagram"></i>
          </span>
          <h4>
            <i className="fa-solid fa-phone"></i> &nbsp;+1-646-956-2012
          </h4>
          <p>
            <i className="fa-solid fa-location-dot"></i> &nbsp;16 East 34th
            Street, 15th Floor, <br />
            New York, NY 10016
          </p>
          <button>Shop Now</button>

        </div>

        <div className="footer-list">
          <ul>
            <li>
              <h4>Shop by</h4>
            </li>

            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Jewellery</li>
            <li>Electronics</li>
            <li>New Arrivals</li>
            <li>Gift Cards</li>
          </ul>

          <ul>
            <li>
              <h4>Customer Policies</h4>
            </li>
            <li>Privacy Policy</li>
            <li>Shipping</li>
            <li>Terms Of Use</li>
            <li>Brand Directory</li>
            <li>Join Our Team</li>
            <li>Knowledge Center & Support</li>
          </ul>

          <ul>
            <li>
              <h4>Help</h4>
            </li>
            <li>Track Your Order</li>
            <li>Frequently Asked Questions</li>
            <li>Returns</li>
            <li>Cancellations</li>
            <li>Payments</li>
            <li>Customer Care</li>

            <li>Insights</li>
          </ul>

          <ul>
            <li>
              <h4>Useful Links</h4>
            </li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Corporate Information</li>
            <li>Site Map</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
