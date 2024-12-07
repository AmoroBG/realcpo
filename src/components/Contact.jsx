import React from "react";

const Contact = () => {
  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <p>Have a project in mind? or just what to say hi, let's hear from you</p>
      <div className="contact-info">
        <div className="contact-details">
          <address>c/o ALX Hub, Accra</address>
          <tel>+23389766390</tel>
          <email>info@realcpo.com</email>
        </div>
        <div className="contact-form">
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Your email" />
          <textarea
            name=""
            id=""
            cols="35"
            rows="7"
            placeholder="Your message"
          ></textarea>
          <button>Send message</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
