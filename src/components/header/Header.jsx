import React from "react";
import "./Header.css";
import { assets } from "../../assests/assets";

const Header = () => {
  return (
    <div className="header-section container">
      {/* --- Left Side --- */}
      <div className="header-left">
        <p className="header-title">
          Book Appointment <br /> With Trusted Doctors
        </p>
        <div className="header-info">
          <img
            src={assets.group_profiles}
            alt="Group Profiles"
            className="profile-img"
          />
          <p>
            Simply browse through our extensive list of trusted doctors,
            <br />
            schedule your appointment hassle-free.
          </p>
        </div>
        <a href="#speciality" className="book-btn">
          Book Appointment{" "}
          <img src={assets.arrow} alt="Arrow Icon" className="arrow-icon" />
        </a>
      </div>

      {/* --- Right Side --- */}
      <div className="header-right">
        <img src={assets.headerimg} alt="Doctor Header" className="header-img" />
      </div>
    </div>
  );
};

export default Header;
