import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext';

const UserProtectWrapper = ({children}) => {

    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const [isLoading, setIsLoading] = useState(true);
    const {user, setUser} = useContext(UserDataContext)

    useEffect(() => {
      if (!token) {
        navigate("/login")
      }else{
        axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }).then((response) => {
          if (response.status === 200) {
            const data = response.data;
            setIsLoading(false);
            setUser(data.user);
          }
        }).catch((error) => {
          console.log(error);
          localStorage.removeItem("token");
          navigate("/login")
        })
      }
    }, [token, navigate])
  return (
    <>
      {children}
    </>
  )
}

export default UserProtectWrapper
