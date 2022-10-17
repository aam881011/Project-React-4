import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Features.scss";

const Product = (props) => {
  return (
    <section className="boxFeat">
      <div>
      <FontAwesomeIcon icon={props.img} />
      </div>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </section>
  );
};
export default Product;
