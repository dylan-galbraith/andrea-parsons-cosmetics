import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/images/logo.png'

export default function Header() {

  const [ open, setOpen ] = useState(false)

  function toggleMenu() {
    setOpen(!open)
  }

  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="logo" />
      <button onClick={toggleMenu} className="header__button">{open ? "CLOSE" : "MENU"}</button>
      <nav className="header__nav">
        <NavLink className="header__nav__link" to='/' exact>HOME</NavLink>
        <NavLink className="header__nav__link" to='/book'>BOOK</NavLink>
        <NavLink className="header__nav__link" to='/services'>SERVICES</NavLink>
        <NavLink className="header__nav__link" to='/about'>ABOUT</NavLink>
        <NavLink className="header__nav__link" to='/contact'>CONTACT</NavLink>
        <NavLink className="header__nav__link" to='/faq'>FAQ</NavLink>
      </nav>
      <nav className={open ? "header__nav--mobile" : "hidden"}>
        <NavLink onClick={toggleMenu} className="header__nav__link" to='/' exact>HOME</NavLink>
        <NavLink onClick={toggleMenu} className="header__nav__link" to='/book'>BOOK</NavLink>
        <NavLink onClick={toggleMenu} className="header__nav__link" to='/services'>SERVICES</NavLink>
        <NavLink onClick={toggleMenu} className="header__nav__link" to='/about'>ABOUT</NavLink>
        <NavLink onClick={toggleMenu} className="header__nav__link" to='/contact'>CONTACT</NavLink>
        <NavLink onClick={toggleMenu} className="header__nav__link" to='/faq'>FAQ</NavLink>
      </nav>
    </div>
  )
}
