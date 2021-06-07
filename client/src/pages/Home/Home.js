import React, { useEffect } from 'react'
import heroImage from '../../assets/images/image1.jpeg'
import './Home.scss'

export default function Home() {

  useEffect(()=>{
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="home">
      <img src={heroImage} className="home__hero" alt=""/>
    </main>
  )
}
