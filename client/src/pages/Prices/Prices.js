import React from 'react'
import './Prices.scss'

export default function Prices() {
  return (
    <main className="prices">
      <h1 className="prices__heading">Pricing</h1>
      <p className="prices__consult">Book a <span>FREE</span> consultation today, and let's get you feeling your absolute best!</p>
      <div className="prices__promo">
        <h2 className="prices__promo__heading">July Promo<br/>Pricing!</h2>
        <div className="prices__col">
          <p className="prices__item">Botox/Dysport <span className="prices__price">- $8/unit</span></p>
          <p className="prices__item">1/2 Syringe Filler <span className="prices__price">- $250</span></p>
          <p className="prices__item">Full Syringe <span className="prices__price">- $450</span></p>
          <p className="prices__item">IV Vitamin Therapy <span className="prices__price">- $150</span></p>
        </div>
      </div>
      <div className="prices__list">
        <div className="prices__col">
          <p className="prices__item">Mini Lip <span className="prices__price">- $275</span></p>
          <p className="prices__item">Full Lip <span className="prices__price">- $475</span></p>
          <p className="prices__item">Dermal Filler Syringe <span className="prices__price">- $475</span></p>
          <p className="prices__item">Botox/Dysport <span className="prices__price">- $9/unit</span></p>
          <p className="prices__item">Filler Dissolve <span className="prices__price">- $160</span></p>
        </div>
        <div className="prices__col">
          <p className="prices__item">Energy IV Therapy <span className="prices__price">- $175</span></p>
          <p className="prices__item">Radiance IV Therapy <span className="prices__price">- 175</span></p>
          <p className="prices__item">Boost IV Therapy <span className="prices__price">- $175</span></p>
          <p className="prices__item">Immune IV Therapy <span className="prices__price">- $255</span></p>        
        </div>
      </div>
    </main>
  )
}