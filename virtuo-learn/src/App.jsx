import React, { useState } from "react";
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
import Science from "./components/Subjects.jsx/Science";
import Computing from "./components/Subjects.jsx/Computing";

import English from "./components/Subjects.jsx/English";
import Donate from "./components/Donate";
import { signOut } from "firebase/auth";
import { auth } from "./firebase.config";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MathQuiz from "./components/Subjects.jsx/MathQuiz";
import ScienceQuiz from "./components/Subjects.jsx/ScienceQuiz";

import ComputingQuiz from "./components/Subjects.jsx/ComputingQuiz";
import EnglishQuiz from "./components/Subjects.jsx/EnglishQuiz";

function App() {

  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
    window.location.pathname = "/login"
    })
  }

  

  return (
    <Router>
      <ToastContainer position="top-right" theme="colored" />
      <Navbar handleSignOut={signUserOut} isAuth={isAuth} />
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth}/>} />
        <Route path="/about" element={<About isAuth={isAuth} />} />
        <Route path="/explore" element={<Explore isAuth={isAuth} />} />
        <Route path="/signup" element={<Signup setIsAuth={setIsAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/math" element={<Math />} />
        <Route path="/english" element={<English />} />
        <Route path="/science" element={<Science />} />
        <Route path="/computing" element={<Computing />} />

        <Route path="/mathQuiz" element={<MathQuiz />} />
        <Route path="/scienceQuiz" element={<ScienceQuiz />} />

        <Route path="/computingQuiz" element={<ComputingQuiz />} />
        <Route path="/englishQuiz" element={<EnglishQuiz />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
