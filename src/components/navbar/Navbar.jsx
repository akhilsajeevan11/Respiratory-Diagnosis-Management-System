import React, { useState } from "react";
import { FaHandHoldingMedical } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { assets } from "../../assests/assets";

const Navbar = () => {
  const navigate = useNavigate();

  const [showMenu, setshowMenu] = useState(false)
  const [token, setToken] = useState(true);

  return (
    <div className="nav container">
      <div className="nav-icon" onClick={()=>navigate("/")}>
        <FaHandHoldingMedical className="icon" />
        <h2>RDMS</h2>
      </div>
      <ul>
        <li>
          <NavLink to="/" activeClassName="active">Home</NavLink>
        </li>
        <li>
          <NavLink to="/doctors" activeClassName="active">All Doctors</NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active">Contact</NavLink>
        </li>
      </ul>
      <div>
        {token ? (
          <div className="profile-container">
            <img src={assets.profile_img} alt="Profile" className="profile-pic"/>
            <img src={assets.dropdown} alt="Dropdown Icon" className="dropdown-icon" />
            <div className="drop-down">
              <div>
                <p onClick={()=>navigate("/my-profile")}>My Profile</p>
                <p onClick={()=>navigate("/my-appoinment")}>My Appointments</p>
                <p onClick={()=>{setToken(false);navigate('/')}} className="logout">Logout</p>
                {/* <p onClick={()=>navigate('/admin')}>Admin</p> */}
              </div>
            </div>
          </div>
        ) : (
          <button className="btn-acc" onClick={() => navigate("/login")}>
            Create Account
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;