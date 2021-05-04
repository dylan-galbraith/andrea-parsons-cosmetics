import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import './Account.scss'
import { useHistory } from 'react-router-dom'

export default function Account() {

  const { currentUser, logout } = useAuth();
  const history = useHistory()

  async function handleLogout(e) {
    e.preventDefault();

    try {
      await logout()
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
