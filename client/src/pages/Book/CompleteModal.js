import React from 'react'

export default function CompleteModal({ closeModalRefresh }) {
  return (
    <div className="book__card">
      <h2 className="book__modal__heading">Thank you for booking!</h2>
      <button onClick={closeModalRefresh} className="book__modal__button book__modal__button--cancel">RETURN</button>
    </div>
  )
}
