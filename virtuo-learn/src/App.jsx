import React from "react"
import Navbar from "./components/Navbar"
import {BrowserRouter as Routes, Route, Router, BrowserRouter } from "react-router-dom"
import Home from "./components/Home"
import Explore from "./components/Explore"
import Signup from "./components/Signup"
import Profile from "./components/Profile"
import { Link } from "react-router-dom"
import "./App.css"

const App = () => {
 

  return (
 
      <>
         <Navbar />
         <Home />
      </>
       
  )
}

export default App
