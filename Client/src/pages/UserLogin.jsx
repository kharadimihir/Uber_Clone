import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();

  const {user, setUser} = useContext(UserDataContext)


  const submitHandler = async (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password
    };

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData);

    if (response.status === 201) {
      const data = response.data
      setUser(data.user)
      localStorage.setItem("token", data.token)

      navigate("/home")
    }
    setEmail("");
    setPassword("");
  }
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
      <img className='w-20 mb-10' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt="images" />
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
        <h3 className="text-lg font-medium mb-2">what's your email</h3>
        <input
         type="email" 
         value={email}
         onChange={(e) => {setEmail(e.target.value)}}
         className="bg-[#eeeeee] mb-4 rounded px-2 py-2 border w-full text-base placeholder:text-sm"
         placeholder="email@example.com" 
         required 
         />
        <h3  className="text-lg font-medium mb-2">Password</h3>
        <input 
        type="password" 
        value={password}
        onChange={(e) => {
          setPassword(e.target.value)
        }}
        className="bg-[#eeeeee] mb-7 rounded px-2 py-2 border w-full text-base placeholder:text-sm"
        placeholder="*******" 
        required 
        />
        <button className="bg-[#111] text-white font-semibold mb-2 rounded px-2 py-2 w-full text-base placeholder:text-sm" >Login</button>
        <p className="text-center">New here? <Link to="/signup" className="text-blue-600">Create New Account</Link></p>
      </form>
      </div>
      <div>
        <Link 
        to="/rider-login" 
        className="bg-[#10b461] flex items-center justify-center  text-white font-semibold mb-5 rounded px-2 py-2 w-full text-base placeholder:text-sm" >
        Sign in as Rider
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
