import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <h1 className="header__heading">Andrea Parsons</h1>
        <h2 className="header__subheading">cosmetic nurse injector</h2>
      </div>
      <nav className="header__nav">
        <NavLink className="header__nav__link" to='/' exact>HOME</NavLink>
        <NavLink className="header__nav__link" to='/book'>BOOK</NavLink>
        <NavLink className="header__nav__link" to='/services'>SERVICES</NavLink>
        <NavLink className="header__nav__link" to='/about'>ABOUT</NavLink>
        <NavLink className="header__nav__link" to='/contact'>CONTACT</NavLink>
        <NavLink className="header__nav__link" to='/faq'>FAQ</NavLink>
      </nav>
    </div>
  )
}
