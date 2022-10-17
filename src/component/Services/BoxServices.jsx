import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Services.scss";
import "./../../index.scss";

const BoxServices = (props) => {
  return (
    <section className="boxServices">
      <FontAwesomeIcon icon={props.img} />
      <div>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </div>
    </section>
  );
};

export default BoxServices;
