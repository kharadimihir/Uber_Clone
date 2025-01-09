import React from 'react'

const LocationSearchPanel = (props) => {

    const location = [
        "24B, Near Kapoor's cafe, Shreyians Coding School, Bhopal",
        "22D, Near Malhotra's cafe, Shreyians Coding School, Bhopal",
        "20C, Near Singhaniaya's cafe, Shreyians Coding School, Bhopal",
        "18E, Near Sharma's cafe, Shreyians Coding School, Bhopal",
        "12B, Near Patel's cafe, Shreyians Coding School, Bhopal",
    ];

  return (
    <div>
        {location.map((element, idx) => (
            <div key={idx} onClick={() => {
                props.setVehiclePanel(true);
                props.setPanelOpen(false);
            }} className='flex gap-3 border-2 border-gray-50 active:border-black p-3 rounded-xl items-center my-2 justify-start'>
            <h2 className='bg-[#eee] flex items-center justify-center h-8 w-12 rounded-full'><i className="ri-map-pin-fill"></i></h2>
            <h4 className='font-medium'>{element}</h4>
        </div>
        ))}
    </div>
  )
}

export default LocationSearchPanel
