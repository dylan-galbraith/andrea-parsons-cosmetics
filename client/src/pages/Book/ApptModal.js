import React from 'react'
import { useAuth } from '../../contexts/AuthContext'

export default function ApptModal({ selectedAppt, date, handleConfirmation, error, closeModal, clients }) {
  const { currentUser } = useAuth()
  const currentClient = clients.find(client => client.id === currentUser.uid)
  console.log(currentClient);

  return (
    <div className="book__card book__card--big">
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
      <form onSubmit={handleConfirmation} className="book__modal__form" name="bookings" netlify method="POST">
        <input type="hidden" name="form-name" value="bookings" />
        <input type="hidden" name="first_name" value={currentClient.firstName} />
        <input type="hidden" name="last_name" value={currentClient.lastName} />
        <input type="hidden" name="email" value={currentClient.email} />
        <input type="hidden" name="phone" value={currentClient.phone} />
        <input type="hidden" name="date" value={date} />
        <input type="hidden" name="time" value={selectedAppt.hour + ":00"} />

        <p className="book__modal__label">Service:</p>
        <select name="service" className="book__modal__select">
          <option value="">--Select Service--</option>
          <option value="Botox">Botox</option>
          <option value="Derma Fillers">Derma Fillers</option>
          <option value="Derma Fillers">IV Vitamin Therapy</option>
        </select>
        <textarea name="comments" className="book__modal__textarea" placeholder="If you would like to request additional services, or have any questions, please let me know here." />
        <p>{error}</p>
        <button className="book__modal__button" type="submit">BOOK</button>
      </form>
      <button onClick={closeModal} className="book__modal__button book__modal__button--cancel">CANCEL</button>
    </div>
  )
}
