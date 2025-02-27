import React, { useContext } from "react";
import "./topdoctors.css";
import { useNavigate } from "react-router-dom";
import { Appcontext } from "../../context/Appcontext";

const Topdoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(Appcontext);
  return (
    <div className="topdoctors-page">
      <h1 className="topdoctors-title">Top Doctors to Book</h1>
      <p className="topdoctors-subtitle">
        Simply browse through our extensive list of trusted doctors.
      </p>
      <div className="topdoctors-list">
        {doctors.slice(0, 10).map((item, index) => (
          <div
            key={index}
            className="topdoctors-card"
            onClick={() => {navigate(`/appoinment/${item._id}`);window.scrollTo(0, 0);}}
          >
            <img src={item.image} alt={item.name} className="topdoctors-image" />
            <div className="topdoctors-details">
              <div className="topdoctors-status">
                <p className="topdoctors-availability">
                  ✅<span className="topdoctors-available">Available</span>
                </p>
              </div>
              <p className="topdoctors-name">{item.name}</p>
              <p className="topdoctors-speciality">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button
  className="topdoctors-more-btn"
  onClick={() => {
    navigate("/doctors");
    window.scrollTo(0, 0);
  }}
>
  More
</button>
    </div>
  );
};

export default Topdoctors;
