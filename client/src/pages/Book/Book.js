import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import './Book.scss'
import { useAuth } from '../../contexts/AuthContext'
import axios from 'axios'
import ApptModal from './ApptModal';
import CompleteModal from './CompleteModal';
import { useHistory } from 'react-router-dom'

Modal.setAppElement(document.getElementById('root'))

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.7)'
  }
}

export default function Book() {

  const { currentUser } = useAuth()
  const [ appts, setAppts ] = useState([])
  const [ date, setDate ] = useState()
  const [ selectedAppt, setSelectedAppt ] = useState("")
  const [modalIsOpen,setIsOpen] = useState(false);
  const [ error, setError ] = useState()
  const [ complete, setComplete ] = useState(false)

  const history = useHistory()

  function openModal(item) {
    setIsOpen(true);
    setSelectedAppt(item)
  }

  function closeModal(){
    setIsOpen(false);
    setError();
  }

  function closeModalRefresh(){
    setIsOpen(false);
    setError();
    history.go()
  }
  
  useEffect(()=>{
    window.scrollTo(0,0)
    axios
    .get(`http://localhost:8070/appointments`)
    .then(response => {
      setAppts(response.data)
    })
  }, [])

  function handleDate(e) {
    e.preventDefault();
    setDate(e.target.date.value)
  }

  function handleConfirmation(e) {
    e.preventDefault();
    if (!e.target.service.value || !currentUser) {
      setError("Please select a service")
    }
    if(e.target.service.value) {
      const client = {
        id: currentUser.uid,
        service: e.target.service.value,
        comments: e.target.comments.value
      }
      console.log(client);
      axios
        .put(`http://localhost:8070/appointments/${selectedAppt.id}`, client)
        .then(response => {
          if(response.status === 200) {
            setComplete(true)
          }
        })
    }
  }

  return (
    <main className="book">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="book__modal"
        style={customStyles}
      >
        {complete ? <CompleteModal closeModalRefresh={closeModalRefresh} /> : <ApptModal selectedAppt={selectedAppt} date={date} handleConfirmation={handleConfirmation} error={error} closeModal={closeModal} />}
      </Modal>
      <h1 className="book__heading">Welcome {currentUser.displayName}!</h1>
      <form className="book__form" onSubmit={handleDate}>
        <p className="book__text">Please select a date to view available times:</p>
        <input className="book__input" type="date" name="date" />
        <button className="book__button book__button--brown">Find</button>
      </form>
      
      {appts.map(item => {
        if (item.date === date) {
          return (
            <div key={item.id} onClick={()=>{openModal(item)}} className="book__card">
              <p className="book__card__time">{item.hour>12 ? item.hour - 12 : item.hour}:00{item.hour>11 ? "pm" : "am"} - {item.hour>11 ? item.hour - 11 : item.hour + 1}:00{item.hour>10 ? "pm" : "am"} </p>
              <p className="book__card__text">Location: {item.location}</p>
            </div>
          )  
        } else return null
      })}
    </main>
  )
}
