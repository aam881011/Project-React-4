import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contactHead">
        <h2>Contact</h2>
        <p>We are born to create</p>
      </div>
      <div className="textContact">
        <p>Feel free to drop us a line at:</p>
        <a href="mailto:leonagency@mail.com" class="link">
          leonagency@mail.com
        </a>
      </div>
      <div className="social">
        <p>Find Us On Social Networks</p>
      </div>
    </div>
  );
};

export default Contact;
