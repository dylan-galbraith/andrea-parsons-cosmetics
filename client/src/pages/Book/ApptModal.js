import React from 'react'

export default function ApptModal({ selectedAppt, date, handleConfirmation, error, closeModal }) {
  return (
    <div className="book__card">
      <h2 className="book__modal__heading">Confirm Booking</h2>
      <div className="book__modal__section">
        <p className="book__modal__label">Date:</p>
        <p className="book__modal__info">{date}</p>
      </div>
      <div className="book__modal__section">
        <p className="book__modal__label">Time:</p>
        <p className="book__modal__info">{selectedAppt.hour>12 ? selectedAppt.hour - 12 : selectedAppt.hour}:00{selectedAppt.hour>11 ? "pm" : "am"} - {selectedAppt.hour>11 ? selectedAppt.hour - 11 : selectedAppt.hour + 1}:00{selectedAppt.hour>10 ? "pm" : "am"}</p>
      </div>
      <div className="book__modal__section">
        <p className="book__modal__label">Location:</p>
        <p className="book__modal__info">{selectedAppt.location}</p>
      </div>
      <form onSubmit={handleConfirmation} className="book__modal__form">
        <select name="service" className="book__modal__select">
          <option value="">--Select Service--</option>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
        </select>
        <textarea name="comments" className="book__modal__textarea" placeholder="If you would like to request additional services, or have any questions, please let me know here." />
        <p>{error}</p>
        <button className="book__modal__button">BOOK</button>
      </form>
      <button onClick={closeModal} className="book__modal__button book__modal__button--cancel">CANCEL</button>
    </div>
  )
}
