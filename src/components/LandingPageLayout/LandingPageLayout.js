import React from "react";
//react router
import { Link } from "react-router-dom";
//import style
import "./style.css";
//import logo and svg for landing page
import logo from "../../assets/logo.svg";
import desktop from "../../assets/desktop.svg";
import smartphone from "../../assets/smartphone.svg";

export function LandingPageLayout() {
  return (
    <div className="landing-container">
      <img src={logo} alt="redberry-logo" />
      {window.innerWidth >= 992 ? (
        <img src={desktop} alt="redberry-landing-page" />
      ) : (
        <img src={smartphone} alt="redberry-landing-page" />
      )}
      <div className="landing-buttons">
        <Link to="/forms">
          <button className="btn-simple">ჩანაწერის დამატება</button>
        </Link>
        <Link to="/records">
          <button className="btn-simple">ჩანაწერების სია</button>
        </Link>
      </div>
    </div>
  );
}
