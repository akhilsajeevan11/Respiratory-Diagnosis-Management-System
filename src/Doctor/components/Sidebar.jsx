import React from "react";
import { Link } from "react-router-dom";
import { FaUserMd, FaCalendarCheck } from "react-icons/fa";
import "../components/Sidebar.css";

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <div className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
      <h2 className="Doctorsidebar-title">Doctor Panel</h2>
      <ul className="Doctorsidebar-menu">
        <li>
          <Link to="/doctordashboard" className="Doctorsidebar-link">
            <FaUserMd className="Doctorsidebar-icon" /> Dashboard
          </Link>
        </li>
        <li>
          <Link to="/doctorAppointment" className="Doctorsidebar-link">
            <FaCalendarCheck className="Doctorsidebar-icon" /> Appointments
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
