import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import {UserDataContext} from '../context/UserContext'

const UserSignUp = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userData, setUserData] = useState("");

  const navigate = useNavigate();

  const {user, setUser} = useContext(UserDataContext)

  const submitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      fullName: {
        firstName: firstname,
        lastName: lastName
      },
      email: email,
      password: password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);

    if (response.status === 201) {
      const data = response.data

      setUser(data.user)
      localStorage.setItem("token", data.token)

      navigate("/home")
    }

    setEmail("");
    setFirstName("");
    setLastName("");
    setPassword("")
    
  }
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
      <img className='w-20 mb-10' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt="images" />
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
        <h3 className="text-lg font-medium mb-2">what's your name</h3>
        <div className='flex gap-3 mb-6'>
          <input
          type="text" 
          className="bg-[#eeeeee] w-1/2 rounded px-2 py-2 border text-lg placeholder:text-base"
          placeholder="Firstname" 
          value={firstname}
          onChange={(e) => {
            setFirstName(e.target.value)
          }}
          required 
          />
          <input
          type="text" 
          className="bg-[#eeeeee] w-1/2 rounded px-2 py-2 border text-lg placeholder:text-base"
          placeholder="Lastname"
          value={lastName} 
          onChange={(e) => {
            setLastName(e.target.value)
          }}
          required 
          />
        </div>
        <h3 className="text-lg font-medium mb-2">what's your email</h3>
        <input
         type="email" 
         className="bg-[#eeeeee] mb-6 rounded px-2 py-2 border w-full text-lg placeholder:text-base"
         placeholder="email@example.com" 
         value={email} 
         onChange={(e) => {
           setEmail(e.target.value)
         }}
         required 
         />
        <h3  className="text-lg font-medium mb-2">Password</h3>
        <input 
        type="password" 
        className="bg-[#eeeeee] mb-6 rounded px-2 py-2 border w-full text-lg placeholder:text-base"
        placeholder="*******" 
        value={password} 
        onChange={(e) => {
          setPassword(e.target.value)
        }}
        required 
        />
        <button className="bg-[#111] text-white font-semibold mb-2 rounded px-2 py-2 w-full text-lg placeholder:text-base" >Create account</button>
        <p className="text-center">Already have an account? <Link to="/login" className="text-blue-600">Login here</Link></p>
      </form>
      </div>
      <div>
      <p className='text-[11px] leading-tight'>This site is protected by reCAPTCHA and the Google  <span className='underline font-medium'>Privacy Policy</span> and <span className='underline font-medium'>Terms of Service</span>apply</p>
      </div>
    </div>
  )
}

export default UserSignUp
