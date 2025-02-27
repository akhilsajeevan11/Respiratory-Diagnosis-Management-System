import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Appcontext } from "../context/Appcontext";
import { assets } from "../assests/assets";
import "./Appoinment.css";
import RelatedDoctors from "../components/relateddoctors/RelatedDoctors";

const Appointments = () => {
  const { docId } = useParams();
  const { doctors } = useContext(Appcontext);

  const [docInfo, setDocInfo] = useState(null);
  const [docslots, setdocslots] = useState([]);
  const [slotIndex, setslotIndex] = useState(0);
   const [slotTime, setslotTime] = useState('')

  useEffect(() => {
    const fetchDocInfo = async () => {
      const doct = doctors.find((doc) => doc._id === docId);
      setDocInfo(doct);
    };
    fetchDocInfo();
  }, [docId, doctors]);

  return (
    docInfo && (
      <div className="container">
        <div className="doctorCard">
          <div className="doctorimage-container">
            <img
              className="doctor-images"
              src={docInfo.image}
              alt={docInfo.name}
            />
          </div>
          <div className="doctor-Details">
            <p className="doctor-name">
              {docInfo.name}
              <img
                className="verified-icon"
                src={assets.professional_tic}
                alt="Verified"
              />
            </p>
            <div className="doctorinfo">
              <p className="doctorDegree">
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button className="doctorexperience">{docInfo.experience}</button>
            </div>
            <div className="doctor-about">
              <p className="about-title">About</p>
              <p className="about-text">{docInfo.about}</p>
              {/* <p className="about-fee">${docInfo.fees}</p> */}
            </div>
          </div>
        </div>

        {/*---slotBooking---  */}
        <div className=" mt-5">
          <h2>Slot Booking</h2>
        </div>

        {/* ---Related Doctor */}
        <div>
          <RelatedDoctors docId={docId} speciality={docInfo.speciality}/>
        </div>
      </div>
    )
  );
};

export default Appointments;
