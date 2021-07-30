import React, { useState } from "react";
import "./ProfileDashboard.css";

export default function ProfileDashboard() {
  const [headerActive, setheaderActive] = useState("overview");
  return (
    <div className="overview">
      <div className="overview-header">
        <div
          className={`title ${headerActive === "overview" ? "active" : ""}`}
          onClick={() => setheaderActive("overview")}
        >
          <span>Overview</span>
        </div>
        <div
          className={`title ${headerActive === "about" ? "active" : ""}`}
          onClick={() => setheaderActive("about")}
        >
          <span>About</span>
        </div>
        <div
          className={`title ${headerActive === "products" ? "active" : ""}`}
          onClick={() => setheaderActive("products")}
        >
          <span>Products</span>
        </div>
        <div
          className={`title ${headerActive === "posts" ? "active" : ""}`}
          onClick={() => setheaderActive("posts")}
        >
          <span>Posts</span>
        </div>
        <div
          className={`title ${headerActive === "jobs" ? "active" : ""}`}
          onClick={() => setheaderActive("jobs")}
        >
          <span>Jobs</span>
        </div>
        <div
          className={`title ${headerActive === "people" ? "active" : ""}`}
          onClick={() => setheaderActive("people")}
        >
          <span>People</span>
        </div>
        <div
          className={`title ${headerActive === "videos" ? "active" : ""}`}
          onClick={() => setheaderActive("videos")}
        >
          <span>Videos</span>
        </div>
      </div>
      {headerActive === "overview" ? (
        <div className="details">
          <div className="title">Overview</div>
          <div className="overview-info">
            Figma is the first professional-grade online tool created
            specifically for interface design. Born on the Wen, Figma helps the
            entire product team create, test, and ship better designs, faster.
          </div>
          <div className="boxes">
            <div className="box">
              <span>Website URL</span>
              <span
                className="website-url"
                onClick={() => window.open("https://www.figma.com/", "_blank")}
              >
                Figma.com
              </span>
            </div>
            <div className="box">
              <span>Funding via Crunchbase</span>
              <span>Series D</span>
              <span>US$ 50M</span>
            </div>
          </div>
          <div className="additional-info">see all details</div>
        </div>
      ) : (
        <div className="details">Not available</div>
      )}
    </div>
  );
}
