import React from 'react'
import './Book.scss'
import { useAuth } from '../../contexts/AuthContext'


export default function Book() {

  const { currentUser } = useAuth()

  return (
    <main className="book">
      <h1>{currentUser.displayName}</h1>
    </main>
  )
}
