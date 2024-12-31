import Rider from "../models/rider.model.js";

const createRider = async ({firstName, lastName, email, password, status, color, plate, capacity, vehicleType}) => {
    if (!firstName || !email || !password || !color || !plate || !capacity || !vehicleType) {
        throw new Error("All fields are required")
    }

    const rider = Rider.create({
        fullName: {
            firstName,
            lastName
        },
        email,
        password,
        status,
        vehicle: {
            color,
            plate,
            capacity,
            vehicleType,

        }
    });

    return rider;
};


export default createRider;