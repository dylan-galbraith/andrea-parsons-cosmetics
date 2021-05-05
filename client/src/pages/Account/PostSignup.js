import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import './Account.scss'
import { useHistory } from 'react-router-dom'
import axios from 'axios';

export default function PostSignup() {

  const { currentUser, updateName } = useAuth();
  const history = useHistory()

  async function handleUpdate(e) {
    e.preventDefault()
    const user = {
      id: currentUser.uid,
      fName: e.target.fName.value,
      lName: e.target.lName.value,
      email: currentUser.email,
      phone: e.target.phone.value
    }
    try {
      await updateName(user.fName)
      axios
      .post(`${process.env.REACT_APP_API_URL}/client/${process.env.REACT_APP_DB_KEY}`, user)
      .then(response => {
        console.log(response);
        if(response.status === 200) {
          history.push('/book')
        }
      })
    } catch {
      // setError("Failed to create an account")
    }
  }
  
  return (
    <main className="account">
      <h1 className="account__heading">Create Account</h1>
      <form className="account__form" onSubmit={handleUpdate}>
        <input className="account__input" placeholder="First Name" name="fName" />
        <input className="account__input" placeholder="Last Name" name="lName" />
        <input className="account__input" name="email" value={currentUser.email}/>
        <input className="account__input" placeholder="Phone Number" name="phone" />
        <button className="account__button account__button--brown">Create</button>
      </form>
    </main>
  )
}
