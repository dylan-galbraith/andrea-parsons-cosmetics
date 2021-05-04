import React, { useEffect, useState } from 'react'
import './Account.scss'
import { useAuth } from '../../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'

export default function Signup() {

  const { signup, currentUser } = useAuth();
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  useEffect(()=>{
    window.scrollTo(0, 0)
  }, [])

  async function handleSubmit(e) {
    e.preventDefault();

    if (e.target.password.value !== e.target.confirm.value) {
      return setError("Passwords do not match")
    }

    if (!e.target.password.value || !e.target.email.value || !e.target.name.value) {
      return setError("Please make sure all fields are filled out")
    }

    try {
      setError('')
      setLoading(true)
      await signup(e.target.email.value, e.target.password.value, e.target.name.value)
      history.push('/book')
    } catch {
      setError("Failed to create an account")
    }
    setLoading(false)
  }

  if (currentUser) {
    history.push('/book')
  }

  return (
    <main className="account">
      <h1 className="account__heading">Signup</h1>
      <form className="account__form" onSubmit={handleSubmit}>
        <input className="account__input" placeholder="First Name" name="name" />
        <input className="account__input" placeholder="Email" name="email" />
        <input className="account__input" placeholder="Password" name="password" type="password" />
        <input className="account__input" placeholder="Confirm Password" name="confirm" type="password" />
        <button className="account__button account__button--brown" disabled={loading}>SignUp</button>
        <p className="account__login">{error}</p>
        <p className="account__login">Already have an account? <Link className="account__login" to='/login'>LogIn</Link></p>
      </form>
    </main>
  )
}