import React, { useState, } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"

function Navbar() {

    return (
        <>
           <nav className="font-link sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
                <div className="container px-4 mx-auto relative text-sm">
                    <div className="flex text-right items-start">
                        <div className="flex items-center flex-shrink-0">
                            <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
                            <span className="text-4xl tracking-tight">Virtuo Learn</span>
                        </div>
                       
                    </div>
                </div>
           </nav>
        </>

    )
}   

export default Navbar