import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Explore from "./components/Explore";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import About from "./components/About";
import "./App.css";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Math from "./components/Subjects.jsx/Math";
import Donate from "./components/Donate";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/math" element={<Math />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
