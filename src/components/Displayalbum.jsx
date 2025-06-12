import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { albumsData, assets, songsData } from "../assets/assets";
import "./Displayalbum.css";
import { Playercontext } from "../context/Playercontext";

const Displayalbum = () => {
  const { id } = useParams();
  const albumData = albumsData[id];
  const {playwithid} = useContext(Playercontext);

  return (
    <>
      <Navbar />

      <div className="display-album">
        <img src={albumData.image} alt={albumData.name} />

        <div className="album-details">
          <p>Playlist</p>
          <h2>{albumData.name}</h2>
          <h4>{albumData.desc}</h4>

          <div className="album-meta">
            <img src={assets.spotify_logo} alt="Spotify Logo" className="w-5 inline-block" />
            <b>Spotify</b>
            <span>• 1,323,456 Likes</span>
            <span> • </span>
            <b>50 Songs , </b>
            <span> • about 2 hr 30 min</span>
          </div>
        </div>
      </div>

      <div className="song-header">
          <p><b>#</b></p>
          <p>Title</p>
          <p>Album</p>
          <p>Date Added</p>
          <img src={assets.clock_icon} alt="Duration" />
        </div>

        <hr />
        {
  songsData.map((item, index) => (
    <div  onClick={() => playwithid(item.id)} className="song-row" key={index}>
      <p><b>{index + 1}</b></p>
      <div className="song-title">
        <img src={item.image} alt={item.name} />
        <div>
          <p>{item.name}</p>
          <p>{albumData.desc.slice(0,12)}</p>
        </div>
      </div>
      <p>{albumData.name || "Unknown Album"}</p>
      <p>{item.dateAdded || "Jun 10, 2025"}</p>
      <p>{item.duration || "3:45"}</p>
    </div>
  ))
}

    </>
  );
};

export default Displayalbum;
