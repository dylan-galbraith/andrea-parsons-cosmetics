import React from 'react'
import './About.scss'
import headshot from '../../assets/images/ap-dog-2.jpg'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <main className="about">
      <div className="about__first">
        <div className="about__bio">
          <p className="about__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque id nibh tortor id. Senectus et netus et malesuada fames ac turpis. Velit scelerisque in dictum non. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Sit amet mauris commodo quis imperdiet massa.</p>
          <a href="https://www.instagram.com/cosmetic.nurse.ange/" className="about__button">Follow on Instagram</a>
          <p className="about__text">Lacus viverra vitae congue eu consequat ac felis donec et. Pellentesque elit eget gravida cum sociis natoque penatibus et. Ipsum faucibus vitae aliquet nec ullamcorper.</p>
        </div>
        <img className="about__image" src={headshot} alt=""/>
      </div>
      <div className="about__second">
        <p className="about__services">Take a look at our services!</p>
        <Link to='/services' className="about__button about__button--brown">SERVICES</Link>
      </div>
      <div className="about__third">
        <div className="about__review">
          <p className="about__text">“Lacus viverra vitae congue eu consequat ac felis donec et. Pellentesque elit eget gravida cum sociis natoque penatibus et.”</p>
          <p className="about__name">- Mariah Lepore</p>
        </div>
        <div className="about__review">
          <p className="about__text">“Pellentesque id nibh tortor id. Senectus et netus et malesuada fames ac turpis. Velit scelerisque in dictum non.”</p>
          <p className="about__name">- Dylan Galbraith</p>
        </div>
      </div>
    </main>
  )
}
