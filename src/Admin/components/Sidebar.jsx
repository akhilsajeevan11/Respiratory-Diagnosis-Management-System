import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import { FaTachometerAlt, FaCalendarCheck, FaUserMd, FaList, FaUsers } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="Adminsidebar-title">Admin Panel</h2>
      <ul className="Adminsidebar-menu">
        <li>
          <NavLink to="/admin" className="Adminsidebar-link">
            <FaTachometerAlt className="Adminsidebar-icon" /> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/appoinments" className="Adminsidebar-link">
            <FaCalendarCheck className="Adminsidebar-icon" /> Appointments
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/add-doctor" className="Adminsidebar-link">
            <FaUserMd className="Adminsidebar-icon" /> Add Doctor
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/doctors-list" className="Adminsidebar-link">
            <FaList className="Adminsidebar-icon" /> Doctors List
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/patients" className="Adminsidebar-link">
            <FaUsers className="Adminsidebar-icon" /> Patients
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;