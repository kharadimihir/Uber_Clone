import React from "react";

const VehiclePanel = (props) => {
    return (
        <div>
            <h5
                onClick={() => {
                    props.setVehiclePanel(false);
                }}
                className="absolute top-0 w-[93%] p-1 text-center"
            >
                <i className="ri-arrow-down-wide-fill text-2xl"></i>
            </h5>
            <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>
            <div onClick={() => {
                props.setConfirmRidePanel(true);
            }} className="flex border-2 active:border-black mb-2 rounded-xl p-3 items-center justify-between">
                <img
                    className="h-14"
                    src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
                    alt="uber car png"
                />
                <div className="-ml-2 w-1/2">
                    <h4 className="font-medium text-base">
                        UberGo{" "}
                        <span>
                            <i className="ri-user-fill"></i>4
                        </span>
                    </h4>
                    <h4 className="font-medium text-sm">2 mins away</h4>
                    <p className="font-normal text-xs text-gray-600">
                        Affordable, compact rides
                    </p>
                </div>
                <h2 className="text-base font-semibold">&#8377;192.2</h2>
            </div>
            <div onClick={() => {
                props.setConfirmRidePanel(true);
            }} className="flex border-2 active:border-black mb-2 rounded-xl p-3 items-center justify-between">
                <img
                    className="h-14"
                    src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
                    alt="uber auto png"
                />
                <div className="ml-2 w-1/2">
                    <h4 className="font-medium text-base">
                        UberAuto{" "}
                        <span>
                            <i className="ri-user-fill"></i>3
                        </span>
                    </h4>
                    <h4 className="font-medium text-sm">2 mins away</h4>
                    <p className="font-normal text-xs text-gray-600">
                        Affordable auto rides
                    </p>
                </div>
                <h2 className="text-base font-semibold">&#8377;118.65</h2>
            </div>
            <div onClick={() => {
                props.setConfirmRidePanel(true);
            }} className="flex border-2 active:border-black mb-2 rounded-xl p-3 items-center justify-between">
                <img
                    className="h-14"
                    src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
                    alt="uber bike png"
                />
                <div className="ml-2 w-1/2">
                    <h4 className="font-medium text-base">
                        Moto{" "}
                        <span>
                            <i className="ri-user-fill"></i>1
                        </span>
                    </h4>
                    <h4 className="font-medium text-sm">3 mins away</h4>
                    <p className="font-normal text-xs text-gray-600">
                        Affordable motorcycle rides
                    </p>
                </div>
                <h2 className="text-base font-semibold">&#8377;65.50</h2>
            </div>
        </div>
    );
};

export default VehiclePanel;
