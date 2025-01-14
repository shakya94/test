import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyNavbar from "./Components/TopNavBar";
import Home from "./Components/Home";
import Login from "./Components/Login";
import SignUp from "./Components/Signup";
import About from "./Components/About";
import Contact from "./Components/Contact";
import "./styles/App.css";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
