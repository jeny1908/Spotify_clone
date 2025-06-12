import React from "react";
import Navbar from "./Navbar";
import { albumsData, songsData } from "../assets/assets";
import Albumitem from "./Albumitem";
import './DisplayHome.css'; // Add this import
import Songitem from "./Songitem"

const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className="display-home">
        <h1 className="section-title">Featured Charts</h1>
        <div className="album-scroll">
          {albumsData.map((item, index) => (
            <Albumitem
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>


      <div className="display-home">
        <h1 className="section-title">Todays's Hits</h1>
        <div className="album-scroll">
          {songsData.map((item,index) => (<Songitem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
