import React, { useContext, useEffect, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'

const Navbar = ({ setShowLogin }) => {
  const location = useLocation();
  const [menu, setMenu] = useState(null);

  const handleMenu = (item) => {
    setMenu(item)
    localStorage.setItem("menu", item)

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const menuItem = localStorage.getItem("menu")
    menuItem ? setMenu(menuItem) : setMenu("home")

  }, [location])

  const { getTotalCartAmount, token ,setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate('/')
  }

  return (
    <div className={scrolled ? "navbar scrolled" : "navbar"}>
      <Link to='/' className='logo'>Feso</Link>
      <ul className="navbar-menu">
        <Link to="/" onClick={() => handleMenu("home")} className={`${menu === "home" ? "active" : ""}`}>home</Link>
        <Link to='/about' onClick={() => handleMenu("about")} className={`${menu === "about" ? "active" : ""}`}>About Us</Link>
        <Link to='/cart' onClick={() => handleMenu("cart")} className={`${menu === "cart" ? "active" : ""}`}>Place Order</Link>
        <Link to='/myorders' onClick={() => handleMenu("myorders")} className={`${menu === "myorders" ? "active" : ""}`}>My Orders</Link>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <Link to='/cart' onClick={() => handleMenu("cart")} className='navbar-search-icon'>
          <img src={assets.basket_icon} alt="" />
          <div className={getTotalCartAmount() > 0 ? "dot" : ""}></div>
        </Link>
        {!token ? <button onClick={() => setShowLogin(true)}>sign in</button>
          : <div className='navbar-profile'>
            <img src={assets.profile_icon} alt="" />
            <ul className='navbar-profile-dropdown'>
            <Link to='/myorders' onClick={() => handleMenu("myorders")} className='orderdrop'><img src={assets.bag_icon} alt="" /> <p>Orders</p></Link> 
              <hr />
              <li onClick={logout}> <img src={assets.logout_icon} alt="" /> <p>Logout</p></li> 
            </ul>
          </div>
        }

      </div>
    </div>
  )
}

export default Navbar
