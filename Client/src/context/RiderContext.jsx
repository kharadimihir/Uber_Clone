import React, { createContext, useState } from "react";

export const RiderDataContext = createContext();

const RiderContext = ({ children }) => {
  const [rider, setRider] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const updateRider = (riderData) => {
    setRider(riderData)
  }

  const value = {
    rider,
    setRider,
    isLoading,
    setIsLoading,
    error,
    setError,
    updateRider
  }

  return (
    <div>
      <RiderDataContext.Provider value={value}>
        {children}
      </RiderDataContext.Provider>
    </div>
  );
};

export default RiderContext;
