import React from "react";
import { Link } from "react-router-dom";
import "../styles/Landing.css";

const Landing = () => {
  return (
    <div className="container">
      <div className="landing">
        <h1 className="text">Do you want to travel around the world?</h1>
        <Link className="landing__link" to="/home">
          <button className="landing__link">Get in</button>
        </Link>
        <h1 className="text">This is your place</h1>
      </div>
    </div>
  );
};

export default Landing;
