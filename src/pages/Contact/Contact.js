import React from 'react'
import './Contact.scss'

export default function Contact() {
  return (
    <main className="contact">
      <div className="contact__first">
        <p className="contact__heading">Still not sure if this is right for you?</p>
        <p className="contact__heading">Can’t decide which services are best for you?</p>
        <p className="contact__text">Feel free to contact me by</p>
        <a className="contact__button">Email</a>
        <p className="contact__text">Or connect with me through</p>
        <a className="contact__button">Instagram</a>
        <p className="contact__text">Or fill out the form below!</p>
      </div>
      <form className="contact__form">
        <input className="contact__input" placeholder="First Name" />
        <input className="contact__input" placeholder="Last Name" />
        <input className="contact__input" placeholder="Email" />
        <textarea className="contact__input contact__input--textarea" placeholder="Message" />
        <button className="contact__button contact__button--brown">SEND</button>
      </form>
    </main>
  )
}
