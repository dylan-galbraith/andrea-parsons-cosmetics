import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Services.scss'
import headshot from '../../assets/images/image8.jpeg'

export default function Services() {

  useEffect(()=>{
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="services">
      <h1 className="services__heading">Services</h1>
      <div className="service service--last">
        <div className="service__faq">
          <h3 className="service__title service__title--last">Getting ready for your appointment?</h3>
          <p className="service__desc">Find out what you need to know <Link className="service__link" to='/faq'>here!</Link></p>
        </div>
        <img className="service__image" src={headshot} alt="" />
      </div>
      <div className="service">
        <h3 className="service__title">Botox</h3>
        <div className="service__bio">
          <p className="service__expect">About:</p>
          <p className="service__desc">Botox is an extremely versatile medication. It is a neuromuscular blocker that can aid in decreasing the appearance of fine lines and wrinkles, migraine prevention, assisting with TMJ disorders and so much more!</p>
          <p className="service__expect">What to Expect:</p>
          <p className="service__desc">Botox is a very safe procedure that is FDA approved. The needles used for botox are actually quite tiny, which makes the procedure relatively painless (although pain is subjective-so this can differ from client to client). The procedure is fairly quick and should only take a maximum of 15 minutes per area of the face. </p>
        </div>
      </div>
      <div className="service">
        <h3 className="service__title">Dermal Fillers</h3>
        <div className="service__bio">
          <p className="service__expect">About:</p>
          <p className="service__desc">Dermal fillers are a gel like substance that is designed to injected beneath the surface of the skin to add volume or fullness. There are multiple areas of the face that can be enhanced from fillers such as: the lips, jawline, cheekbone, chin and forehead/eyebrow area.</p>
          <p className="service__expect">What to Expect:</p>
          <p className="service__desc">A typical appointment for filler can range from 45-75 minutes. A numbing agent is applied to assist in making the procedure as comfortable as possible. Together we will collaborate on finding the best option for you and your face! </p>
        </div>
      </div>
      <div className="service">
        <h3 className="service__title">IV Vitamin Therapy</h3>
        <div className="service__bio">
          <p className="service__expect">About:</p>
          <p className="service__desc">Our infusion bags are made with premium Health Canada approved ingredients. There are four pre-mixed treatments to choose from in order to taper individual needs. See below for further details and benefits.</p>
          <p className="service__expect">What to Expect:</p>
          <p className="service__desc">A typical appointment for IV Vitamin Therapy is approximately 40 minutes. You can also add an infusion while receiving another treatment like Botox!</p>
          <p className="service__desc">Find out more <a href="https://www.farsk.health/iv-drips/immune" target="_blank" rel="noopener noreferrer">here</a>.</p>

        </div>
      </div>
    </main>
  )
}
