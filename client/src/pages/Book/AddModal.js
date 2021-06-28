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
        <option value="8">8:00am</option>
        <option value="8.5">8:30am</option>
        <option value="9">9:00am</option>
        <option value="9.5">9:30am</option>
        <option value="10">10:00am</option>
        <option value="10.5">10:30am</option>
        <option value="11">11:00am</option>
        <option value="11.5">11:30am</option>
        <option value="12">12:00pm</option>
        <option value="12.5">12:30pm</option>
        <option value="13">1:00pm</option>
        <option value="13.5">1:30pm</option>
        <option value="14">2:00pm</option>
        <option value="14.5">2:30pm</option>
        <option value="15">3:00pm</option>
        <option value="15.5">3:30pm</option>
        <option value="16">4:00pm</option>
        <option value="16.5">4:30pm</option>
        <option value="17">5:00pm</option>
        <option value="17.5">5:30pm</option>
        <option value="18">6:00pm</option>
        <option value="18.5">6:30pm</option>
        <option value="19">7:00pm</option>
        <option value="19.5">7:30pm</option>
        <option value="20">8:00pm</option>
        <option value="20.5">8:30pm</option>
      </select>
      <p>{error}</p>
      <button className="book__modal__button">CREATE</button>
    </form>
    <button onClick={closeModal} className="book__modal__button book__modal__button--cancel">CANCEL</button>
    </div>
  )
}
