import "./About.scss";
import img from "./../../assets/images/about.jpg";

const About = () => {
  return (
    <div className="about">
      <section className="container">
        <section className="headAbout">
          <h2>About</h2>
          <p>Less is more work</p>
        </section>
        <div className="contentAbout">
          <section className="imgAbout">
            <img src={img} alt="img" />
          </section>
          <section className="textAbout">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              nemo neque voluptate tempora velit cum non, fuga vitae architecto
              delectus sed maxime rerum impedit aliquam obcaecati, aut excepturi
              iusto laudantium!
            </p>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              sapiente. Velit iure exercitationem dolores nesciunt dolore. Eum
              officiis dolorum hic voluptate quaerat minima, similique inventore
              esse, alias, sed quo officia?
            </p>
          </section>
        </div>
      </section>
    </div>
  );
};

export default About;
