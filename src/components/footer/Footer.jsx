import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { FaHandHoldingMedical } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="footer-section">
            <FaHandHoldingMedical className="footer-icon"/>
            <h2 className="brand-name">RDMS</h2>
          </div>

          <p className="footer-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        <div className="footer-links">
          <h3>COMPANY</h3>
          <ul>
            <li>
              <Link to="/" onClick={()=>window.scrollTo(0, 0)}>Home</Link>
            </li>
            <li>
              <Link to="/doctors" onClick={()=>window.scrollTo(0, 0)}>All Doctors</Link>
            </li>
            <li>
              <Link to="/about" onClick={()=>window.scrollTo(0, 0)}>About</Link>
            </li>
            <li>
              <Link to="/contact" onClick={()=>window.scrollTo(0, 0)}>Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>GET IN TOUCH</h3>
          <p>+91- 9000000000</p>
          <p>dummy@gmail.com</p>
        </div>
      </div>

      <hr />
      <p className="footer-copy">Copyright © 2025 - All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
