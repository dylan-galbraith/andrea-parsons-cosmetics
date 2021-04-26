import React from 'react'
import instagram from '../assets/images/instagram.svg'

export default function Footer() {
  return (
    <div className="footer">
      <h4 className="footer__heading">Don't miss out on any updates!</h4>
      <p className="footer__subheading">Subscribe to our mailing list</p>
      <form className="footer__form">
        <input className="footer__input" placeholder="Enter your email" />
        <button className="footer__button">Subscribe!</button>
      </form>
      <p className="footer__text">Don't forget to follow on Instagram</p>
      <div className="footer__instagram">
        <img className="footer__instagram__icon" src={instagram} />
        <p className="footer__instagram__handle">@cosmetic.nurse.ange</p>
      </div>
    </div>
  )
}
