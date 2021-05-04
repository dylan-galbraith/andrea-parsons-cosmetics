import React, { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import './Account.scss'
import { useHistory } from 'react-router-dom'
import axios from 'axios';

export default function Account() {

  const { currentUser, logout } = useAuth();
  const [error, setError] = useState('')
  const history = useHistory()

  async function handleLogout(e) {
    e.preventDefault();

    try {
      await logout()
      history.pushState('/signup')
    } catch {
    }
  }

  function handleUpdate(e) {
    e.preventDefault()
    const user = {
      id: currentUser.uid,
      fName: e.target.fName.value,
      lName: e.target.lName.value,
      email: currentUser.email,
      phone: e.target.phone.value
    }
    axios
      .post('http://localhost:8070/client', user)
      .then(response => {
        if(response.data === 200) {
          history.push('/book')
        }
      })
  }
  
  return (
    <main className="account">
      <h1 className="account__heading">Create Account</h1>
      <form className="account__form" onSubmit={handleUpdate}>
        <input className="account__input" placeholder="First Name" name="fName" />
        <input className="account__input" placeholder="Last Name" name="lName" />
        <input className="account__input" name="email" value={currentUser.email}/>
        <input className="account__input" placeholder="Phone Number" name="phone" />
        <button className="account__button account__button--brown">Create</button>
        <p className="account__login">{error}</p>
      </form>
      <button onClick={handleLogout}>Logout</button>
    </main>
  )
}
