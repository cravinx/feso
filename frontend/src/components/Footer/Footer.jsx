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
            <a href="https://www.facebook.com/emmanuel.yekeh.7"  target="_blank"><img src={assets.facebook_icon} alt="" /></a>
            <a href="https://www.instagram.com/feso005?igsh=MTkyNXluOGh2ZXF6MA==" target="_blank"><img src={assets.instagram_icon} alt="" /></a>
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
            <li><a href="tel:+231886705708"></a>+231886705708</li>
            <li><a href="mailto:eyekeh33@gmail.com">eyekeh33@gmail.com</a></li>
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
