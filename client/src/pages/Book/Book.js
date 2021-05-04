import React, { useEffect } from 'react'
import './Book.scss'
import { useAuth } from '../../contexts/AuthContext'
import axios from 'axios'

export default function Book() {

  const { currentUser } = useAuth()
  
  useEffect(()=>{
    window.scrollTo(0,0)
  }, [])

  return (
    <main className="book">
      <h1>{currentUser.displayName}</h1>
    </main>
  )
}
