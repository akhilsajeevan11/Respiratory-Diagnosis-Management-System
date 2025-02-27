import React from "react";
import { specialityData } from "../../assests/assets";
import { Link } from "react-router-dom";
import "./speciality.css";

const SpecialityMenu = () => {
  return (
    <div id="speciality" className="container speciality-content">
      <h1>Find by Speciality</h1>
      <p>
        Simply browse through our extensive list of trusted doctors, schedule
        <br /> your appointment hassle-free.
      </p>
      <div className="speciality-cards">
        {specialityData.map((item, index) => (
          <Link
            key={index}
            to={`/doctors/${item.speciality}`}
            className="speciality-card"
            onClick={() => window.scrollTo(0, 0)}
          >
            <img
              src={item.image}
              alt={item.speciality}
              className="speciality-image"
            />
            <p className="item-content">{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
