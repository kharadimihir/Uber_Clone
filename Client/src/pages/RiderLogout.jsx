import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RiderLogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        // If no token is found, just navigate to login page (or handle as you see fit)
        navigate("/rider-login");
        return;
      }

      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/riders/logout`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          localStorage.removeItem("token"); // Remove token after successful logout
          navigate("/rider-home"); // Redirect to rider-home page
        }
      } catch (error) {
        console.error("Logout error:", error); // Log the error if it occurs
      }
    };

    logout(); // Call the async logout function inside useEffect
  }, [navigate]);

  return (
    <div>
      Logging out...
    </div>
  );
};

export default RiderLogout;
