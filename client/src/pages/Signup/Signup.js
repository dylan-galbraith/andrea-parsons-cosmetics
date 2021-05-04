import React, { useEffect, useState } from 'react'
import './Signup.scss'
import { useAuth } from '../../contexts/AuthContext'
import { useHistory } from 'react-router-dom'

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
      history.push('/')
    } catch {
      setError("Failed to create an account")
    }
    setLoading(false)
  }

  if (currentUser) {
    history.push('/book')
  }

  console.log(error);

  return (
    <main className="signup">
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <input className="signup__input" placeholder="First Name" name="name" />
        {/* <input className="signup__input" placeholder="Last Name" name="lName" /> */}
        <input className="signup__input" placeholder="Email" name="email" />
        <input className="signup__input" placeholder="Password" name="password" />
        <input className="signup__input" placeholder="Confirm Password" name="confirm" />
        <button>Signup</button>
      </form>
    </main>
  )
}