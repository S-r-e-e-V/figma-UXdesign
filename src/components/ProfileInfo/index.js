import React from "react";
import "./ProfileInfo.css";

import Images from "../../assets";

export default function ProfileInfo() {
  return (
    <div className="profile-info">
      <img className="cover-pic" src={Images.profileBackground} />

      <div className="profile-pic">
        <img src={Images.figma} />
      </div>
      <div className="profile-details">
        <span className="profile-name">Figma</span>
        <span className="tag-line">
          A design platform for teams who build products together
        </span>
        <span className="designation">
          Design . San Francisco,CA . 101,282 followers
        </span>
        <div className="employees">See all 358 enployees on the LinkedIn</div>
        <div className="btns">
          <div className="follow">
            <span>Follow</span>
          </div>
          <div className="website">
            <span>Visit website</span>
          </div>
          <div className="dots">
            <span>...</span>
          </div>
        </div>
      </div>
    </div>
  );
}
