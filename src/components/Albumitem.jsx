import React from "react";
import './Albumitem.css';
import { useNavigate } from "react-router-dom";

const Albumitem = ({ image, name, desc, id }) => {
  const navigate = useNavigate();

  return (
    <div
      className="album-item"
      onClick={() => navigate(`/album/${id}`)}
    >
      <img className="album-image" src={image} alt={name} />
      <div className="album-info">
        <p className="album-name">{name}</p>
        <p className="album-desc">{desc}</p>
      </div>
    </div>
  );
};

export default Albumitem;
