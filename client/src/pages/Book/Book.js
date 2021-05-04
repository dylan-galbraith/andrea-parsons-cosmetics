import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import './Book.scss'
import { useAuth } from '../../contexts/AuthContext'
import axios from 'axios'

Modal.setAppElement(document.getElementById('root'))

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.7)'
  }
}

export default function Book() {

  const { currentUser } = useAuth()
  const [ appts, setAppts ] = useState()
  const [ date, setDate ] = useState()
  const [ selectedAppt, setSelectedAppt ] = useState("")
  const [modalIsOpen,setIsOpen] = useState(false);

  function openModal(item) {
    setIsOpen(true);
    setSelectedAppt(item)
  }

  function closeModal(){
    setIsOpen(false);
  }
  
  useEffect(()=>{
    window.scrollTo(0,0)
    axios
      .get(`http://localhost:8070/appointments/${date}`)
      .then(response => {
        setAppts(response.data)
      })
  }, [])

  function handleMonth(e) {
    e.preventDefault();
    setDate(e.target.date.value)
  }

  function handleConfirmation() {
    console.log("Confirmed");
  }

  if(!appts) return <p>Loading...</p>
  return (
    <main className="book">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="book__modal"
        style={customStyles}
      >
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
            <select className="book__modal__select">
              <option>--Select Service--</option>
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
            <textarea className="book__modal__textarea" placeholder="If you would like to request additional services, or have any questions, please let me know here." />
            <button className="book__modal__button">BOOK</button>
          </form>
          <button onClick={closeModal} className="book__modal__button book__modal__button--cancel">CANCEL</button>
        </div>
      </Modal>
      <h1 className="book__heading">Welcome {currentUser.displayName}!</h1>
      <form className="book__form" onSubmit={handleMonth}>
        <p className="book__text">Please select a date to view available times:</p>
        <input className="book__input" type="date" name="date" />
        <button className="book__button book__button--brown">Find</button>
      </form>
      
      {appts.map(item => {
        if (item.date === date) {
          return (
            <div onClick={()=>{openModal(item)}} className="book__card">
              <p className="book__card__time">{item.hour>12 ? item.hour - 12 : item.hour}:00{item.hour>11 ? "pm" : "am"} - {item.hour>11 ? item.hour - 11 : item.hour + 1}:00{item.hour>10 ? "pm" : "am"} </p>
              <p className="book__card__text">Location: {item.location}</p>
            </div>
          )  
        } else return
      })}
    </main>
  )
}
