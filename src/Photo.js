import React from "react";
import "./photo.css";

const Photo = ({ username, image, type, url }) => {
  return (
    <div className="item-place">
      <a href={url}>
        <img src={image} alt={type}></img>
      </a>
      <div className="hidden">
        <div className="hide-info">{username}</div>
      </div>
    </div>
  );
};

export default Photo;
