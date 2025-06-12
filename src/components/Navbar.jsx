import React from "react";
import { assets } from "../assets/assets";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    
    return (
        <>
        <div className="navbar">
            <div className="nav-buttons">
                <img onClick={() => navigate(-1)} className="nav-button" src={assets.arrow_left} alt="Go Back" />
                <img onClick={() => navigate(1)} className="nav-button" src={assets.arrow_right} alt="Go Forward" />
            </div> 

           <div className="nav-actions">
                <p className="nav-button-action">Explore Premium</p>
                <p className="nav-button-action">Install App</p>
                <p className="profile-icon">J</p>
            </div>

        </div>

        <div className="nav-categories">
            <p className="c1">All</p>
            <p>Podcasts</p>
             <p>Music</p>
        </div>

        </>
    );
};

export default Navbar;
