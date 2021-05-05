import React from 'react'
import './Book.scss'

export default function AddAppt({ openModal }) {
  return (
    <div onClick={openModal} className="book__card">
      <p>Add an appointment</p>
    </div>
  )
}
