import React, { useEffect, useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import './Account.scss'
import Signup from './Signup';
import { useHistory } from 'react-router-dom'

export default function Account() {

  const { currentUser, logout } = useAuth();
  const history = useHistory()
  const [open, setOpen] = useState(false)

  async function handleLogout(e) {
    e.preventDefault();

    try {
      await logout()
      setOpen(false)
      history.pushState('/signup')
    } catch {
    }
  }
  
  return (
    <main className="account">
      {currentUser.displayName}
      <button onClick={handleLogout}>Logout</button>
    </main>
  )
}
