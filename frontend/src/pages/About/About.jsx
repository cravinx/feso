import React from "react";
import "./About.css";
import { assets } from "../../assets/assets";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        {/* Left Side - Image */}
        <div className="about-image-container">
          <img
            src={assets.chef1}
            alt="Chef preparing food"
            className="about-image"
          />
        </div>

        {/* Right Side - Text */}
        <div className="about-text-container">
          <h2 className="about-heading">About Feso</h2>
          <p className="about-paragraph">
            Feso started in a small kitchen in 2015, with a simple idea: to make
            gourmet meals accessible to everyone. Our founder, inspired by their
            love of cooking and passion for technology, created Feso as a way to
            blend convenience with culinary excellence.
          </p>
          <p className="about-paragraph">
            Over the years, we've grown from a local food delivery service into
            a trusted platform that serves thousands of customers every day. Our
            commitment to quality, sustainability, and customer satisfaction has
            been at the heart of everything we do.
          </p>

          <p className="about-paragraph">
            At Feso, we’re passionate about delivering fresh, flavorful meals
            right to your doorstep. Our team works tirelessly to bring you a
            seamless and satisfying dining experience, using only the freshest
            ingredients and culinary expertise.
          </p>
          <p className="about-paragraph">
            Whether you’re craving a quick lunch or a hearty dinner, we’ve got
            you covered with a diverse menu tailored to every taste.
          </p>
          <button
            className="about-button"
            onClick={() => {
              window.scrollTo(0, document.body.scrollHeight);
            }}
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
