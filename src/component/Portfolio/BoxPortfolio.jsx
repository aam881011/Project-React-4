import React from "react";
import "./Portfolio.scss";

const BoxPortfolio = (props) => {
  return (
    <div className="boxPortfolio">
      <img src={props.img} alt="logo" />
      <div className="contBoxPortf">
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default BoxPortfolio;
