import React from "react";
import { useParams } from "react-router-dom";

const AlbumPage = () => {
  const { id } = useParams();

  return (
    <div style={{ color: "white", padding: "20px" }}>
      <h2>Album Page</h2>
      <p>Album ID: {id}</p>
    </div>
  );
};

export default AlbumPage;
