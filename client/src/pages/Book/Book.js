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
import deleteIcon from '../../assets/icons/delete-icon.svg'
import headshot from '../../assets/images/image6.jpeg'

Modal.setAppElement(document.getElementById('root'))

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.7)'
  }
}

const API_URL = process.env.REACT_APP_API_URL
const API_KEY = process.env.REACT_APP_DB_KEY

export default function Book() {

  const { currentUser, logout } = useAuth()
  const [ appts, setAppts ] = useState([])
  const [ date, setDate ] = useState()
  const [ selectedAppt, setSelectedAppt ] = useState("")
  const [ modalIsOpen,setIsOpen ] = useState(false);
  const [ error, setError ] = useState()
  const [ complete, setComplete ] = useState(false)
  const [ clients, setClients ] = useState()
  const [ avail, setAvail ] = useState([])

  const history = useHistory()

  function minDate() {
    const today = new Date();
    let day = today.getDate();
    let month = today.getMonth();

    if (day < 10) {
      day = `0${day.toString()}`
    }
    if (month < 10) {
      month = month+1
      if (month < 10) {
        month = `0${month.toString()}`
      }
    }
    const minDate = today.getFullYear() + "-" + month + "-" + day; 
    return minDate
  }

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
    .get(`${API_URL}/appointments/${API_KEY}`)
    .then(response => {
      let respAppts = response.data
      axios
      .get(`${API_URL}/client/${API_KEY}`)
      .then(response => {
        if(response.status === 200) {
          setClients(response.data)
          setAppts(respAppts)
          setDate(minDate())
        }
      })
    })
  }, [])

  function handleDate(e) {
    e.preventDefault();
      setDate(e.target.value)
      setAvail(appts.filter(item => item.date === e.target.value && !item.filled))
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

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "bookings", ...client })
      })
        .then(() => alert("Success!"))
        .catch(error => alert(error));

      axios
        .put(`${API_URL}/appointments/${selectedAppt.id}/${API_KEY}`, client)
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
    } else {
      const newAppt = {
        location: e.target.location.value,
        time: e.target.time.value,
        date: date
      }
      axios
        .post(`${API_URL}/appointments/${API_KEY}`, newAppt)
        .then(response => {
          if(response.status === 200) {
            closeModal()
            axios
              .get(`${API_URL}/appointments/${API_KEY}`)
              .then(response => {
                if (response.status === 200) {
                  setAppts(response.data)
                }
              })
          }
        })
    }
  }

  function deleteAppt(id) {
    axios
      .delete(`${API_URL}/appointments/${id}/${API_KEY}`)
      .then(response => {
        if (response.status === 200) {
          axios
          .get(`${API_URL}/appointments/${API_KEY}`)
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
  console.log(currentUser);

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
          <input className="book__input" type="date" name="date" min={minDate()} onChange={handleDate} value={date}/>
        </form>
        
        {appts.map(item => {
          if (item.date === date) {
            return (
              <div key={item.id} className={item.filled ? "book__card book__card--filled" : "book__card"}>
                <img onClick={()=>{deleteAppt(item.id)}} className="book__card__icon" src={deleteIcon} alt=""/>
                <p className="book__card__time">{item.filled ? "BOOKED" : ""}</p>
                <p className="book__card__time">{item.hour>12 ? item.hour - 12 : item.hour}:00{item.hour>11 ? "pm" : "am"} - {item.hour>11 ? item.hour - 11 : item.hour + 1}:00{item.hour>10 ? "pm" : "am"} </p>
                <p className="book__card__text">Location: {item.location}</p>
                <p className={item.filled ? "book__card__text" : "hidden"}>Service: {item.services}</p>
                <p className={item.filled ? "book__card__text" : "hidden"}>Comments: {item.comments}</p>
                {clients.map(client =>{
                  if (client.id === item.clientId) {
                    return (
                      <div key={client.id} className="book__card__client">
                        <p className="book__card__text">Client: {client.firstName} {client.lastName}</p>
                        <p className="book__card__text">Email: {client.email}</p>
                        <p className="book__card__text">Phone: {client.phone}</p>
                      </div>
                    )
                  } else return null 
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
        {complete ? <CompleteModal closeModalRefresh={closeModalRefresh} /> : <ApptModal selectedAppt={selectedAppt} date={date} handleConfirmation={handleConfirmation} error={error} closeModal={closeModal} clients={clients} />}
      </Modal>
      <div className="book__first">
        <div className="book__intro">
          <h1 className="book__heading">Book Your Next Appointment</h1>
          <h3 className="book__welcome">Hello {currentUser.displayName}!</h3>
          <p className="book__notyou">Not you? <button className="book__logout" onClick={handleLogout}>Logout</button></p>
        </div>
        <img className="book__image" src={headshot} alt="" />
      </div>
      <form className="book__form" onSubmit={handleDate}>
        <p className="book__text">Please select a date to view available times:</p>
        <input className="book__input" type="date" min={minDate()} name="date" onChange={handleDate} value={date}/>
      </form>
      {avail.length === 0 && date ?            
        <div className="book__card">
          <p className="book_card_time">Sorry, there are no available appointments on this day. Please check another day.</p>
        </div> : avail.map(item => {
          return (
            <div key={item.id} onClick={()=>{openModal(item)}} className="book__card">
              <p className="book__card__time">{item.hour>12 ? item.hour - 12 : item.hour}:00{item.hour>11 ? "pm" : "am"} - {item.hour>11 ? item.hour - 11 : item.hour + 1}:00{item.hour>10 ? "pm" : "am"} </p>
              <p className="book__card__text">Location: {item.location}</p>
            </div>
          )  
        }
      )
      }
    </main>
  )
}
