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
      <div>
        <img className="desktop-svg" src={desktop} alt="redberry-desktop-svg" />
        <img
          className="smartphone-svg"
          src={smartphone}
          alt="redberry-smartphone-svg"
        />
      </div>
      <div className="landing-page-buttons">
        <Link to="/forms">
          <button className="btn-landing route-link">ჩანაწერის დამატება</button>
        </Link>
        <Link to="/records">
          <button className="btn-landing route-link">ჩანაწერების სია</button>
        </Link>
      </div>
    </div>
  );
}
