import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">Wasy to Contact Us</span>
          <span className="sexondaryText">
            We always ready to help by providing the best seervice for you. We
            believe a good place to live can make your life better.
          </span>
          <div className="flexColStart contactModes">
            <div className="flexColStart row">
              <div className="flexColStart mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span>Call</span>
                    <span>+1-9548215394</span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>
            </div>
          </div>
        </div>
        <div className="c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="error" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
