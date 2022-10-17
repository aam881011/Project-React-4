import React from "react";
import BoxPortfolio from "./BoxPortfolio";
import dataPortfolio from "./Data";
import "./Portfolio.scss";

const Portfolio = () => {
  const Data = dataPortfolio.map((item) => {
    return (
      <BoxPortfolio
        id={item.id}
        img={item.img}
        title={item.title}
        text={item.text}
      />
    );
  });
  return (
    <div className="Portfolio">
      <section className="container">
        <section className="headPortfolio">
          <h2>Portfolio</h2>
          <p>If you do it right, it will last forever.</p>
        </section>
        <section className="boxesPortfolio">{Data}</section>
      </section>
    </div>
  );
};

export default Portfolio;
