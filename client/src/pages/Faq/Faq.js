import React, { useEffect } from 'react'
import './Faq.scss'

export default function Faq() {

  useEffect(()=>{
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="faq">
      <h1 className="faq__heading">FAQ</h1>
      <div className="faq__card">
        <h3 className="faq__question">What should I do in preparation of my appointment?</h3>
        <p className="faq__answer">Injection of dermal fillers can cause some bruising and swelling. These are some tips to minimize this:</p>
        <ul className="faq__list">
            <li>Avoid taking any NSAIDS 2 weeks prior to treatment (Ibuprofen, Naproxen, Advil, Motrin) as these medications act as blood thinners.</li>
            <li>Avoid consuming alcohol 24 hours prior to your procedure. Alcohol is a vasodilator and can increase risk of bruising.</li>
            <li>HYDRATE! Drinks as much water as you can!</li>
          </ul>
      </div>
      <div className="faq__card">
        <h3 className="faq__question">What should I do after my appointment?</h3>
        <p className="faq__answer">Injection of dermal fillers can cause some bruising and swelling. These are some tips to minimize this:</p>
        <ul className="faq__list">
            <li>Avoid any vigorous exercise for 2 days following your procedure (you’re welcome!)</li>
            <li>Avoid consuming alcohol 24 hours following your procedure. Alcohol is a vasodilator and can increase risk of bruising.</li>
            <li>HYDRATE! Drinks as much water as you can!</li>
            <li>Ice the area of your face that you had injected. Not only will this feel good, it will help with swelling and bruising. </li>
          </ul>
      </div>
    </main>
  )
}
