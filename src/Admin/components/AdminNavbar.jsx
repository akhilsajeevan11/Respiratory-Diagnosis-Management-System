import React from "react";
import "./AdminNav.css";
import { FaHandHoldingMedical } from "react-icons/fa";

const AdminNavbar = () => {
  return (
    <div className="admin-navbar">
        <div className="admin-logo-section">
        <FaHandHoldingMedical className="admindash-icon" />
        <h2>RDMS</h2>
        </div>
      
      <div className="navbar-right">
        <button className="logout-btn">Logout</button>
      </div>
    </div>
  );
};

export default AdminNavbar;
