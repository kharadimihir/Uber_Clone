import axios from 'axios';
import React, {useContext, useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { RiderDataContext } from '../context/RiderContext';

const RiderProtectWrapper = ({children}) => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token")
    const [isLoading, setIsLoading] = useState(true);

    const {rider, setRider} = useContext(RiderDataContext)

    useEffect(() => {
        if (!token) {
            navigate("/rider-login")
        }else{
          axios.get(`${import.meta.env.VITE_BASE_URL}/riders/profile`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          .then((response) => {
            if (response.status === 200) {
              const data = response.data;
              setRider(data.rider);
              setIsLoading(false);
            }
          })
          .catch((error) => {
            console.log(error);
            localStorage.removeItem("token");
            navigate("/rider-login")
          })
      
        }
    }, [token, navigate]);

    
    if (isLoading) {
      return (
        <div>Loading...</div>
      )
    }
  return (
    <div>
      {children}
    </div>
  )
}

export default RiderProtectWrapper
