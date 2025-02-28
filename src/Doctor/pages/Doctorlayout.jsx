import React from "react";
import Sidebar from "../components/Sidebar";
import DoctorNav from "../components/DoctorNav";
import DoctorDashboard from "./DoctorDashboard";
import "../pages/DoctorDashboard.css"; // Import custom CSS
import "../pages/Doctorlayout.css"

const Doctorlayout = () => {
  return (
    <div className="doctor-layout">
      <Sidebar />
      <div className="dashboard-content">
        <DoctorNav />
        <DoctorDashboard />
      </div>
    </div>
  );
};

export default Doctorlayout;
