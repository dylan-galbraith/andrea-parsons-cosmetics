import React, { useEffect, useState } from 'react'
import './Account.scss'
import { useAuth } from '../../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'

export default function Login() {

  const { login, currentUser } = useAuth();
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  useEffect(()=>{
    window.scrollTo(0, 0)
  }, [])

  async function handleLogin(e) {
    e.preventDefault();

    try {
      setError('')
      setLoading(true)
      await login(e.target.email.value, e.target.password.value)
      history.push('/book')
    } catch {
      setError("Failed to log in")
    }
    setLoading(false)
  }

  if (currentUser) {
    history.push('/book')
  }

  return (
    <main className="account">
      <h1 className="account__heading">Login</h1>
      <p>Please login to book an appointment.</p>
      <form className="account__form" onSubmit={handleLogin}>
        <input className="account__input" placeholder="Email" name="email" />
        <input className="account__input" placeholder="Password" name="password" type="password" />
        <p className="account__login">{error}</p>
        <button className="account__button account__button--brown" disabled={loading}>LogIn</button>
        <p className="account__login">Already have an account? <Link className="account__login" to='/signup'>SignUp</Link></p>
      </form>
    </main>
  )
}