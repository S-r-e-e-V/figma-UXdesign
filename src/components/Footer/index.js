import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="links">
        <div>About</div>
        <div>Accessibility</div>
        <div>Help Center</div>
        <div>Privacy & Terms</div>
        <div>AdChoices</div>
        <div>Advertising</div>
        <div>Business Services</div>
        <div>Get the LinkedIn App</div>
      </div>
      <div className="text">
        <span>
          Linked<span className="linkedin-img">in</span>
        </span>
        <span>LinkedIn © 2021</span>
      </div>
    </div>
  );
}
