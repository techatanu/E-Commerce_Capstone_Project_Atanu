import React, { useState, useContext } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <span className='quick'>Quick</span><span className='cart'>Cart</span>
      </div>
      <ul className='nav-menu'>
        <li onClick={() => { setMenu("Home") }}><Link style={{ textDecoration: 'None' }} to='/'>Home</Link>{menu === "Home" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("men") }}><Link style={{ textDecoration: 'None' }} to='/men'>Men</Link>{menu === "men" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("women") }}><Link style={{ textDecoration: 'None' }} to='/women'>Women</Link>{menu === "women" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("kids") }}><Link style={{ textDecoration: 'None' }} to='/kids'>Kids</Link>{menu === "kids" ? <hr /> : <></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};
