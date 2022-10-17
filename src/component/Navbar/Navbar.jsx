import "./Navbar.scss";
import { useRef } from "react";
import logo from "./../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navigation = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("open");
  };
  return (
    <section className="container">
      <section className="parentNav">
        <img src={logo} alt="" />
        <nav>
          <FontAwesomeIcon
            className="iconMenu"
            onClick={showNavbar}
            icon={faSliders}
          />
          <ul ref={navRef}>
            <li>
              <Link to="#Services">Services</Link>
              <Link to="#Portfolio">Portfolio</Link>
              <Link to="#About">About</Link>
              <Link to="#Contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </section>
    </section>
  );
};

export default Navigation;
