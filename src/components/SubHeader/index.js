import React from "react";
import { useHistory } from "react-router-dom";
import "./SubHeader.css";

import Images from "../../assets";

function SubHeader() {
  const history = useHistory();
  return (
    <div className="sub-header">
      <div onClick={() => history.push("/home")}>
        <img src={Images.homeIcon} />
        <span>Home</span>
      </div>
      <div onClick={() => history.push("/my-network")}>
        <img src={Images.networkIcon} />
        <span>My network</span>
      </div>
      <div onClick={() => history.push("/job-offers")}>
        <img src={Images.suitcaseIcon} />
        <span>Job offers</span>
      </div>
      <div onClick={() => history.push("/")}>
        <img src={Images.personIcon} />
        <span>My profile</span>
      </div>
    </div>
  );
}
export default SubHeader;
