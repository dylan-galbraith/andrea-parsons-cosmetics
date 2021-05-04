import React, { useEffect, useState } from 'react'
import './Book.scss'
import { useAuth } from '../../contexts/AuthContext'
import axios from 'axios'

export default function Book() {

  const { currentUser } = useAuth()
  const [ appts, setAppts ] = useState()
  const [ date, setDate ] = useState()
  
  useEffect(()=>{
    window.scrollTo(0,0)
    axios
      .get('http://localhost:8070/appointments')
      .then(response => {
        setAppts(response.data)
      })
  }, [])

  function handleMonth(e) {
    e.preventDefault();
    setDate(e.target.date.value)
  }

  if(!appts) return <p>Loading...</p>
  return (
    <main className="book">
      <h1 className="book__heading">Welcome {currentUser.displayName}!</h1>
      <form className="book__form" onSubmit={handleMonth}>
        <p className="book__text">Please select a date to view available times:</p>
        <input className="book__input" type="date" name="date" />
        <button className="book__button book__button--brown">Find</button>
      </form>
      
      {appts.map(item => {
        if (item.date === date) {
          return (
            <div className="book__card">
              <p className="book__card__text">Time: {item.hour>12 ? item.hour - 12 : item.hour}:00{item.hour>11 ? "pm" : "am"} - {item.hour>11 ? item.hour - 11 : item.hour}:00{item.hour>10 ? "pm" : "am"} </p>
              <p className="book__card__text">Location: {item.location}</p>
            </div>
          )  
        } else return
      })}
    </main>
  )
}
