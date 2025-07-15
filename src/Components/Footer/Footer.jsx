import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <span className='quick'>Quick</span><span className='cart'>Cart</span>
        </div>
        <ul className='footer-links'>
            <li><Link to="/" style={{textDecoration: "none", color: "inherit"}}>Products</Link></li>
            <li><Link to="/about" style={{textDecoration: "none", color: "inherit"}}>About</Link></li>
            <li><Link to="/contact" style={{textDecoration: "none", color: "inherit"}}>Contact</Link></li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <a href='https://www.instagram.com/'>
                <img src={instagram_icon} alt="" />
                </a>
            </div>
            <div className="footer-icons-container">
                <a href="https://web.whatsapp.com/">
                <img src={whatsapp_icon} alt="" />
                </a>
            </div>
        </div>
        <div className="footer-copyright">
            <hr/>
            <p>Copyright @2025 - All Right Reserved</p>
        </div>
    </div>
  )
}
