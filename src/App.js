import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./components/login&register/Login";
import Register from "./components/login&register/Register";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Doctors from "./pages/Doctors";
import Myappoinments from "./pages/Myappoinments";
import Myprofile from "./pages/Myprofile";
import Appoinments from "./pages/Appoinments";
import Footer from "./components/footer/Footer";

// Admin Pages
import Adminlayout from "./Admin/pages/Adminlayout";
import AdminAppoinments from "./Admin/pages/AdminAppoinments";
import Admin_AddDoctors from "./Admin/pages/Admin_AddDoctors";
import DoctorList from "./Admin/pages/DoctorList";
import PatientList from "./Admin/pages/PatientList";
import AdminDashboard from "./Admin/pages/AdminDashboard";

// Doctor Pages
import Doctorlayout from "./Doctor/pages/Doctorlayout";
import DoctorDashboard from "./Doctor/pages/DoctorDashboard";

const App = () => {
  const location = useLocation();

  // Hide Navbar and Footer for Admin and Doctor pages
  const hideLayout = location.pathname.startsWith("/admin") || location.pathname.startsWith("/doctor");

  return (
    <div>
      {!hideLayout && <Navbar />}

      <Routes>
        {/* --- User Pages --- */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/doctors/:speciality" element={<Doctors />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/appoinment/:docId" element={<Appoinments />} />
        <Route path="/my-appoinment" element={<Myappoinments />} />
        <Route path="/my-profile" element={<Myprofile />} />

        {/* --- Admin Routes --- */}
        <Route path="/admin" element={<Adminlayout />} />
        <Route path="/dashborad" element={<AdminDashboard />} />
        <Route path="/admin/appoinments" element={<AdminAppoinments />} />
        <Route path="/admin/add-doctor" element={<Admin_AddDoctors />} />
        <Route path="/admin/doctors-list" element={<DoctorList />} />
        <Route path="/admin/patients" element={<PatientList />} />

        {/* --- Doctor Routes --- */}
        <Route path="/doctor" element={<Doctorlayout />} />
        <Route path="/doctordashboard" element={<DoctorDashboard />} />
        <Route path="/doctorAppointment" element={<Appoinments />} />
      </Routes>

      {!hideLayout && <Footer />}
    </div>
  );
};

export default App;
