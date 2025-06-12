import React from 'react';
import { assets } from '../assets/assets';
import './Sidebar.css';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
const navigate = useNavigate();

  return (
    <div className="sidebar">
      <div onClick={() => navigate(`/`)} className="icon-container">
        <img src={assets.home_icon} alt="Home Icon" />
        <h1>Home</h1>
      </div>

      <div className="icon-container">
        <img src={assets.search_icon} alt="Search Icon" />
        <h1>Search</h1>
      </div>

      <div className="library-section">
        <img src={assets.stack_icon} alt="Library Icon" />
        <p>Your Library</p>

        <div className="icon-row">
            <img src={assets.arrow_icon} alt="Arrow Icon" />
            <img src={assets.plus_icon} alt="Plus Icon" />
        </div>

        
        <div className="box">
            <h1>create your first playlist</h1>
            <p>we will hwlp you to make</p>
            <button>create playlist</button>
        </div>

        <div className="box">
            <h1>let's find someone podcasts to follow</h1>
            <p>we'll keep you update on new episode</p>
            <button>browse podcasts</button>
        </div>
      </div>

      
    </div>
  );
};

export default Sidebar;
