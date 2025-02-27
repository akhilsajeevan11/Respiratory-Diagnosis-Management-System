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

// Addmin page section
import Adminlayout from "./Admin/pages/Adminlayout";
import AdminAppoinments from "./Admin/pages/AdminAppoinments";
import Admin_AddDoctors from "./Admin/pages/Admin_AddDoctors";
import DoctorList from "./Admin/pages/DoctorList";
import PatientList from "./Admin/pages/PatientList";
import AdminDashboard from "./Admin/pages/AdminDashboard";



const App = () => {
  const location = useLocation();

  // Hide Navbar and Footer for Admin page
  const hideLayout = location.pathname.startsWith("/admin") ;

  return (
    <div>
      {!hideLayout && <Navbar />}

      <Routes>
        {/* ---user pages--- */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/doctors/:speciality" element={<Doctors />}></Route>
        <Route path="/doctors" element={<Doctors />}></Route>
        <Route path="/appoinment/:docId" element={<Appoinments />}></Route>
        <Route path="/my-appoinment" element={<Myappoinments />}></Route>
        <Route path="/my-profile" element={<Myprofile />}></Route>

        {/* --AdminRoutes-- */}
        <Route path="/admin" element={<Adminlayout/>}></Route>
        <Route path="/dashborad" element={<AdminDashboard/>}></Route>
        <Route path="/admin/appoinments" element={<AdminAppoinments/>}></Route>
        <Route path="/admin/add-doctor" element={<Admin_AddDoctors/>}></Route>
        <Route path="/admin/doctors-list" element={<DoctorList/>}></Route>
        <Route path="/admin/patients" element={<PatientList/>}></Route>

        
        
      </Routes>

      {!hideLayout && <Footer />}
    </div>
  );
};

export default App;
