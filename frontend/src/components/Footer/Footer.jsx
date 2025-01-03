import React, { useState, useEffect } from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { Link, useLinkClickHandler } from "react-router-dom";

const Footer = () => {
  const [menu, setMenu] = useState(null);

  const handleMenu = (item) => {
    setMenu(item);
    localStorage.setItem("menu", item);

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <Link to="/" className="logo">
            Feso
          </Link>
          <p>
            we’re passionate about delivering fresh, flavorful meals right to
            your doorstep. Our team works tirelessly to bring you a seamless and
            satisfying dining experience, using only the freshest ingredients
            and culinary expertise.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <Link
              to="/"
              onClick={() => handleMenu("home")}
              className = "footer_menu"
            >
              home
            </Link>
            <Link
              to="/about"
              onClick={() => handleMenu("about")}
              className = "footer_menu"
            >
              About Us
            </Link>
            <Link
              to="/cart"
              onClick={() => handleMenu("cart")}
              className = "footer_menu"
            >
              Place Order
            </Link>
            <Link
              to="/myorders"
              onClick={() => handleMenu("myorders")}
              className = "footer_menu"
            >
              My Orders
            </Link>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-212-456-7890</li>
            <li>contact@feso.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © Feso.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
