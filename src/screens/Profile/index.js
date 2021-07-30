import React from "react";
import "./Profile.css";

import viewedPages from "../../constants/viewedPages";

import ProfileInfo from "../../components/ProfileInfo";
import ProfileDashboard from "../../components/ProfileDashboard";
import LinkedinInfoBox from "../../components/LinkedinInfoBox";
import Footer from "../../components/Footer";

export default function Profile() {
  return (
    <div className="profile">
      <div className="container-1">
        <ProfileInfo />
        <ProfileDashboard />
      </div>
      <div className="container-2">
        <div className="recommendations">
          <span className="title">Pages people also viewed</span>

          {viewedPages.map((page) => (
            <LinkedinInfoBox
              key={page.id}
              image={page.image}
              name={page.name}
              field={page.field}
              followers={page.followers}
            />
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
}
