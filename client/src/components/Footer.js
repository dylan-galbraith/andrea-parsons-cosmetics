import React from 'react'
import instagram from '../assets/images/instagram.svg'
import logo from '../assets/images/logo-white.svg'

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__info">
        <p className="footer__heading">Contact Info</p>
        <p className="footer__link">Located in North London, ON</p>
        <a className="footer__link" href="tel:+14165756076">(416) 575-6076</a>
        <a className="footer__link" href="mailto:andrea-parsons@hotmail.com">andrea-parsons@hotmail.com</a>
        <a href="https://www.instagram.com/cosmetic.nurse.ange/" target="_blank" rel="noopener noreferrer">
          <img className="footer__instagram" src={instagram} alt="" />
        </a>
      </div>
      <img className="footer__logo" src={logo} alt="logo"/>
    </div>
  )
}
