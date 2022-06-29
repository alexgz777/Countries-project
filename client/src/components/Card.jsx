import React from "react";
import { Link } from "react-router-dom";
import "../styles/Card.css";

const Card = ({ id, image, name, continent }) => {
  return (
    <Link to={`/${id}`} key={id} className="card">
      <img src={image} alt="country flag" className="card__link--img" />
      <h3 className="card__link--h3">{name}</h3>
      <h5 className="card__link--h5">{continent}</h5>
    </Link>
  );
};

export default Card;
