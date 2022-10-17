import "./Features.scss";
import Product from "./Product";
import dataFeatures from "./Data";

const Features = () => {
  const fetchData = dataFeatures.map((item) => {
    return (
      <Product
        id={item.id}
        img={item.img}
        title={item.title}
        text={item.text}
      />
    );
  });

  return (
    <section className="feature">
      <section className="container">
        <div className="boxesFeatures">{fetchData}</div>
      </section>
    </section>
  );
};

export default Features;
