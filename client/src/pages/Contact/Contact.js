import React, { useEffect } from 'react'
import './Contact.scss'
import headshot from '../../assets/images/image7.jpeg'

export default function Contact() {

  useEffect(()=>{
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="contact">
      <div className="contact__first">
        <div className="contact__bio">
          <img className="contact__image--mobile" src={headshot} alt=""/>
          <h1 className="contact__heading">Contact Me</h1>
          <p className="contact__text">Please feel free to fill out the form below with any questions or concerns you may have, and I will get back to you as soon as possible!</p>
        </div>
        <img className="contact__image" src={headshot} alt=""/>
      </div>
      <form className="contact__form" name="contact" method="POST">
        <input type="hidden" name="form-name" value="contact" />
        <input className="contact__input" placeholder="First Name" />
        <input className="contact__input" placeholder="Last Name" />
        <input className="contact__input" placeholder="Email" />
        <textarea className="contact__input contact__input--textarea" placeholder="Message" />
        <button className="contact__button contact__button--brown" type="submit">SEND</button>
      </form>
    </main>
  )
}
