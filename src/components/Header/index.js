import React from "react";
import "./Header.css";
import Images from "../../assets";

export default function Header() {
  return (
    <div className="header">
      <div className="section-1">
        <div className="linkedin-img">
          <span>in</span>
        </div>
        <div className="search-input">
          <input placeholder="search" />
          <img src={Images.searchIcon} />
        </div>
      </div>
      <div className="section-2">
        <img src={Images.bellIcon} />
        <img src={Images.chatIcon} />
        <img src={Images.avatar} />
        <img src={Images.menuIcon} />
        <div className="premium-btn">Upgrade to Premium</div>
      </div>
    </div>
  );
}
