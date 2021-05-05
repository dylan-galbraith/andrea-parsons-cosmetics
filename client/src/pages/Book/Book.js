import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import './Book.scss'
import { useAuth } from '../../contexts/AuthContext'
import axios from 'axios'
import ApptModal from './ApptModal';
import CompleteModal from './CompleteModal';
import { useHistory } from 'react-router-dom'
import AddAppt from './AddAppt';
import AddModal from './AddModal';

Modal.setAppElement(document.getElementById('root'))

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.7)'
  }
}

export default function Book() {

  const { currentUser, logout } = useAuth()
  const [ appts, setAppts ] = useState([])
  const [ date, setDate ] = useState()
  const [ selectedAppt, setSelectedAppt ] = useState("")
  const [modalIsOpen,setIsOpen] = useState(false);
  const [ error, setError ] = useState()
  const [ complete, setComplete ] = useState(false)
  const [ clients, setClients ] = useState()

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
      let respAppts = response.data
      axios
      .get(`${process.env.REACT_APP_API_URL}/client`)
      .then(response => {
        if(response.status === 200) {
          setClients(response.data)
          setAppts(respAppts)
        }
      })
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
      axios
        .put(`http://localhost:8070/appointments/${selectedAppt.id}`, client)
        .then(response => {
          if(response.status === 200) {
            setComplete(true)
          }
        })
    }
  }

  function addAppt(e) {
    e.preventDefault();
    if (!e.target.time.value || !e.target.location.value) {
      setError("Please select a time and location")
    }
    const newAppt = {
      location: e.target.location.value,
      time: e.target.time.value,
      date: date
    }
    axios
      .post(`http://localhost:8070/appointments`, newAppt)
      .then(response => {
        if(response.status === 200) {
          closeModal()
          axios
            .get(`${process.env.REACT_APP_API_URL}/appointments`)
            .then(response => {
              if (response.status === 200) {
                setAppts(response.data)
              }
            })
        }
      })
  }
  

  async function handleLogout(e) {
    e.preventDefault();

    try {
      await logout()
      history.pushState('/signup')
    } catch {
    }
  }

  if (currentUser.uid === process.env.REACT_APP_ADMIN_ID) {
    return (
      <main className="book">
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="book__modal"
          style={customStyles}
        >
          <AddModal closeModal={closeModal} error={error} addAppt={addAppt} />
        </Modal>
        <h1 className="book__heading">Welcome Back Boss!</h1>
        <p className="book__notyou">Not you? <button className="book__logout" onClick={handleLogout}>Logout</button></p>
        <form className="book__form" onSubmit={handleDate}>
          <p className="book__text">Please select a date to view/add time slots:</p>
          <div>
            <input className="book__input" type="date" name="date" />
            <button className="book__button book__button--brown">Find</button>
          </div>
        </form>
        
        {appts.map(item => {
          if (item.date === date) {
            console.log(clients.find(client => client.id === item.clientId));
            return (
              <div key={item.id} onClick={()=>{openModal(item)}} className={item.filled ? "book__card book__card--filled" : "book__card"}>
                <p className="book__card__time">{item.filled ? "BOOKED" : ""}</p>
                <p className="book__card__time">{item.hour>12 ? item.hour - 12 : item.hour}:00{item.hour>11 ? "pm" : "am"} - {item.hour>11 ? item.hour - 11 : item.hour + 1}:00{item.hour>10 ? "pm" : "am"} </p>
                <p className="book__card__text">Location: {item.location}</p>
                <p className="book__card__text">{item.filled ? `Service: ${item.services}` : ""}</p>
                <p className="book__card__text">{item.filled ? `Comments: ${item.comments ? item.comments : "N/A"}` : ""}</p>
                {clients.map(client =>{
                  if (client.id === item.clientId) {
                    return (
                      <div className="book__card__client">
                        <p className="book__card__text">Client: {client.firstName} {client.lastName}</p>
                        <p className="book__card__text">Email: {client.email}</p>
                        <p className="book__card__text">Phone: {client.phone}</p>
                      </div>
                    )
                  } 
                } )}
              </div>
            )  
          } else return null
        })}
        {date ? <AddAppt openModal={openModal} /> : null}

      </main>
    )
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
      <h1 className="book__heading">Hello {currentUser.displayName}!</h1>
      <p className="book__notyou">Not you? <button className="book__logout" onClick={handleLogout}>Logout</button></p>
      <form className="book__form" onSubmit={handleDate}>
        <p className="book__text">Please select a date to view available times:</p>
        <input className="book__input" type="date" name="date" />
        <button className="book__button book__button--brown">Find</button>
      </form>
      
      {appts.map(item => {
        if (item.date === date && item.filled === false) {
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
