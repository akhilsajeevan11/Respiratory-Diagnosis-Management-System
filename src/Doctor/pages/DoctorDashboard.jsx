import React from "react";
import { Link } from "react-router-dom";
import "../pages/DoctorDashboard.css"

const DoctorDashboard = () => {
  return (
    <div className="doctor-dashboard">
      <div className="dashboard-header">
        <h2>Doctor Dashboard</h2>
        <p>Welcome, Dr. John Doe</p>
      </div>

      {/* Stats Section */}
      <div className="dashboard-stats">
        <div className="stat-card">
          <h3>Total Appointments</h3>
          <p>25</p>
        </div>
        <div className="stat-card">
          <h3>Upcoming Consultations</h3>
          <p>5</p>
        </div>
        <div className="stat-card">
          <h3>Patients Seen Today</h3>
          <p>3</p>
        </div>
      </div>

      {/* Upcoming Appointments */}
      <div className="dashboard-section">
        <h2>Upcoming Appointments</h2>
        <div className="appointments-list">
          <div className="appointment-card">
            <h4>John Doe</h4>
            <p>Condition: COPD</p>
            <button className="btn-details">View Details</button>
          </div>
          <div className="appointment-card">
            <h4>Jane Smith</h4>
            <p>Condition: Asthma</p>
            <button className="btn-details">View Details</button>
          </div>
          <div className="appointment-card">
            <h4>Peter Brown</h4>
            <p>Condition: Pneumonia</p>
            <button className="btn-details">View Details</button>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="dashboard-actions">
        <Link to="/doctorAppointment" className="dashboard-btn">Manage Appointments</Link>
        <Link to="/doctor" className="dashboard-btn">Start Virtual Consultation</Link>
      </div>
    </div>
  );
};

export default DoctorDashboard;
