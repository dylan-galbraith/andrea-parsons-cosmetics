import React from 'react'

export default function AddModal({ closeModal, error, addAppt }) {
  return (
    <div className="book__card book__card--big">
      <form onSubmit={addAppt} className="book__modal__form">
      <select name="location" className="book__modal__select">
        <option value="">--Select Location--</option>
        <option value="North London, ON">North London, ON</option>
        <option value="Pickering, ON">Pickering, ON</option>
      </select>
      <select name="time" className="book__modal__select">
        <option value="">--Select Time--</option>
        <option value="08:00am">8:00am</option>
        <option value="08:30am">8:30am</option>
        <option value="09:00am">9:00am</option>
        <option value="09:30am">9:30am</option>
        <option value="10:00am">10:00am</option>
        <option value="10:30am">10:30am</option>
        <option value="11:00am">11:00am</option>
        <option value="11:30am">11:30am</option>
        <option value="12:00pm">12:00pm</option>
        <option value="12:30pm">12:30pm</option>
        <option value="01:00pm">1:00pm</option>
        <option value="01:30pm">1:30pm</option>
        <option value="02:00pm">2:00pm</option>
        <option value="02:30pm">2:30pm</option>
        <option value="03:00pm">3:00pm</option>
        <option value="03:30pm">3:30pm</option>
        <option value="04:00pm">4:00pm</option>
        <option value="04:30pm">4:30pm</option>
        <option value="05:00pm">5:00pm</option>
        <option value="05:30pm">5:30pm</option>
        <option value="06:00pm">6:00pm</option>
        <option value="06:30pm">6:30pm</option>
        <option value="07:00pm">7:00pm</option>
        <option value="07:30pm">7:30pm</option>
        <option value="08:00pm">8:00pm</option>
        <option value="08:30pm">8:30pm</option>
      </select>
      <p>{error}</p>
      <button className="book__modal__button">CREATE</button>
    </form>
    <button onClick={closeModal} className="book__modal__button book__modal__button--cancel">CANCEL</button>
    </div>
  )
}
