import React from "react";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen">
        <Link to={"/home"} className="fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full">
        <i className="ri-home-5-line text-lg font-medium"></i>
        </Link>
      <div className="h-1/2">
        <img
          className="h-full w-full object-cover "
          src="https://upload.wikimedia.org/wikipedia/commons/3/3a/MAPS.ME_Android_App_v9.4.4_Screenshot_with_Subway_Route_Built.jpg"
          alt="Image"
        />
      </div>
      <div className="h-1/2 p-4">
      <div className="flex items-center justify-between">
        <img
          className="h-20"
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
          alt="uber car png"
        />
        <div className="text-right">
          <h2 className="text-lg font-medium">Sarthak</h2>
          <h4 className="text-xl font-semibold -mt-1 -mb-1">MP04 AB 1234</h4>
          <p className="text-sm text-gray-600">Maruti Suzuki Swift Dzire</p>
        </div>
      </div>
      <div className="flex gap-2 flex-col items-center justify-between">
        <div className="w-full mt-5">
          
          <div className="flex gap-5 items-center justify-start p-3 border-b-2">
            <i className=" text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariya Talab, Ahmedabad
              </p>
            </div>
          </div>
          <div className="flex gap-5 items-center justify-start p-3">
            <i className="ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">&#8377;192.2</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
            </div>
          </div>
        </div>
      </div>
        <button className="w-full bg-green-600 mt-5 text-white font-semibold p-2 rounded-lg">Make a Payment</button>
      </div>
    </div>
  );
};

export default Riding;
