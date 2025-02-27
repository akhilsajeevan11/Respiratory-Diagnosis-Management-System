import React from "react";
import { assets } from "../../assests/assets";
import "./banner.css"; // Import CSS file
import { useNavigate } from "react-router-dom";

const Banner = () => {
    const navigate=useNavigate();
  return (
    <div className="banner">
      {/* Left Side */}
      <div className="banner-content">
        <h1 className="banner-title">
          Book Appointment <br /> With 100+ Trusted Doctors
        </h1>
        <button className="banner-btn" onClick={()=>{navigate('/login');window.scrollTo(0, 0);}}>Create account</button>
      </div>

      {/* Right Side */}
      <div className="banner-image">
        <img src={assets.appoinment_docimg} alt="Doctor" />
      </div>
    </div>
  );
};

export default Banner;