import React, { useEffect } from 'react'
import './About.scss'
import headshot from '../../assets/images/image4.jpeg'
import { Link } from 'react-router-dom'

export default function About() {

  useEffect(()=>{
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="about">
      <div className="about__first">
        <div className="about__bio">
          <img className="about__image--mobile" src={headshot} alt=""/>
          <p className="about__text">Hi there! Thanks for stopping by my website. I am Andrea, a registered nurse since 2018. I have always dreamed of working in the aesthetic side of medicine; and after gaining experience in acute care, I figured that now was the best time! I currently work in the emergency department, where I get to engage with tons of different personalities and utilize various skill sets. I love learning and expanding my practice- and can’t wait to continue to do so with aesthetics!  </p>
          <a href="https://www.instagram.com/cosmetic.nurse.ange/" className="about__button" target="_blank" rel="noopener noreferrer">Follow on Instagram</a>
          <p className="about__text">I can’t wait to hopefully meet you and make you feel your most beautiful! Please do not hesitate to reach out with any questions.</p>
        </div>
        <img className="about__image" src={headshot} alt=""/>
      </div>
      <div className="about__second">
        <p className="about__services">Take a look at my services!</p>
        <Link to='/services' className="about__button about__button--brown">SERVICES</Link>
      </div>
      {/* <div className="about__third">
        <div className="about__review">
          <p className="about__text">“Lacus viverra vitae congue eu consequat ac felis donec et. Pellentesque elit eget gravida cum sociis natoque penatibus et.”</p>
          <p className="about__name">- Mariah Lepore</p>
        </div>
        <div className="about__review">
          <p className="about__text">“Pellentesque id nibh tortor id. Senectus et netus et malesuada fames ac turpis. Velit scelerisque in dictum non.”</p>
          <p className="about__name">- Dylan Galbraith</p>
        </div>
      </div> */}
    </main>
  )
}
