import React from "react";
import "./LinkedinInfoBox.css";

import Images from "../../assets";
export default function LinkedinInfoBox({ image, name, field, followers }) {
  return (
    <div className="linkedinfo-box">
      <img src={image} />
      <div>
        <span className="profile-name">{name}</span>
        <div className="sub-section">
          <span>{field}</span> <span className="dot">.</span>
          <span>{followers} followers</span>
        </div>
      </div>
      <img className="view-more" src={Images.eyeIcon} />
    </div>
  );
}
