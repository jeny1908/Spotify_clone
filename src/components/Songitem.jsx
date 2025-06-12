import React, { useContext } from "react";
import './Songitem.css';
import { Playercontext } from "../context/Playercontext";

const Songitem = ({ name, image, desc, id }) => {

  const {playwithid} = useContext(Playercontext);
  return (
    <div onClick={() => playwithid(id)} className="song-item">
      <img src={image} alt={name} />
      <p className="song-name">{name}</p>
      <p className="song-desc">{desc}</p>
    </div>
  );
};

export default Songitem;
