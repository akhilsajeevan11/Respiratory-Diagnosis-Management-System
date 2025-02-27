import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Appcontext } from "../../context/Appcontext";
import { useNavigate } from "react-router-dom";

const RelatedDoctors = ({ docId, speciality }) => {
  const { doctors } = useContext(Appcontext);
  const [relDoc, setrelDoc] = useState([]);
  const navigate =useNavigate();

  useEffect(() => {
    if (doctors.length > 0 && speciality) {
        const doctorsData=doctors.filter((doc)=>doc.speciality===speciality && doc._id !==docId)
        setrelDoc(doctorsData);
    }
  }, [doctors, docId, speciality]);

  return (
    <div className="topdoctors-page">
      <h1 className="topdoctors-title">Related Doctors</h1>
      <p className="topdoctors-subtitle">
        Simply browse through our extensive list of trusted doctors.
      </p>
      <div className="topdoctors-list">
        {relDoc.slice(0, 5).map((item, index) => (
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
    </div>

  );
};

export default RelatedDoctors;
