import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Appcontext } from "../context/Appcontext";
import "./Doctors.css";

const Doctors = () => {
  const { speciality } = useParams();
  const [filterdoc, setfilterdoc] = useState([]);
  const navigate = useNavigate();

  const { doctors } = useContext(Appcontext);

  const applyFilter = () => {
    if (speciality) {
      setfilterdoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setfilterdoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div className="doctors-page">
      <p className="doctors-title">Browse through the doctors specialist.</p>
      <div className="doctors-wrapper">
        {/* Sidebar Filters */}
        <div className="doctors-sidebar">
          <p onClick={()=>speciality==='General physician' ? navigate('/doctors'):navigate('/doctors/General physician')} className="doctors-filter">General physician</p>
          <p onClick={()=>speciality==='Gynecologist' ? navigate('/doctors'):navigate('/doctors/Gynecologist')}className="doctors-filter">Gynecologist</p>
          <p onClick={()=>speciality==='Dermatologist' ? navigate('/doctors'):navigate('/doctors/Dermatologist')}className="doctors-filter">Dermatologist</p>
          <p onClick={()=>speciality==='Pediatricians' ? navigate('/doctors'):navigate('/doctors/Pediatricians')}className="doctors-filter">Pediatricians</p>
          <p onClick={()=>speciality==='Neurologist' ? navigate('/doctors'):navigate('/doctors/Neurologist')}className="doctors-filter">Neurologist</p>
          <p onClick={()=>speciality==='Gastroenterologist' ? navigate('/doctors'):navigate('/doctors/Gastroenterologist')}className="doctors-filter">Gastroenterologist</p>
        </div>

        {/* Doctors List */}
        <div className="doctors-list">
          {filterdoc.map((item, index) => (
            <div
              key={index}
              className="doctor-card"
              onClick={() => navigate(`/appoinment/${item._id}`)}
            >
              <img className="doctor-image" src={item.image} alt={item.name} />
              <div className="doctor-info">
                <div className="doctor-availability">
                  ✅<span>Available</span>
                </div>
                <p className="doctor-name">{item.name}</p>
                <p className="doctor-speciality">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;