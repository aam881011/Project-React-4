import BoxServices from "./BoxServices";
import DataServices from "./Data";
import "./Services.scss";

const Services = () => {
  const Data = DataServices.map((item) => {
    return (
      <BoxServices
        id={item.id}
        img={item.img}
        title={item.title}
        text={item.text}
      />
    );
  });
  return (
    <div className="services">
      <div className="headerServices">
        <h2>services</h2>
        <p>Don't be busy, be productive</p>
      </div>
      <div className="container">
        <div className="boxes">{Data}</div>
      </div>
    </div>
  );
};

export default Services;
