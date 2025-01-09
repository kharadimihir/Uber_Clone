import Rider from "../models/rider.model.js"
import { validationResult } from "express-validator"
import createRider from "../services/rider.service.js";
import BlackLisingTokens from "../models/blacklistingtokens.model.js";


// Function for register rider
const registerRider = async (req, res, next) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(401).json({ message: "Invalid Details"})
    }

    const { fullName, email, password, vehicle} = req.body;

    const isRiderAlreadyExist = await Rider.findOne({ email });

    if (isRiderAlreadyExist) {
        return res.status(400).json({ message: "Rider already exist"})
    }
    const hashPassword = await Rider.hashPassword(password)

    const rider = await createRider({
        firstName: fullName.firstName,
        lastName: fullName.lastName,
        email: email,
        password: hashPassword,
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType
    })

    const token = rider.generateAuthToken()

    return res.status(200).json({ token, rider });
};

// Function for login rider

const loginRider = async(req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ message: "Invalid Credentials"})
    }

    const {email, password} = req.body;

    if (!email || !password) {
        return res.status(401).josn({ message: "Invalid Email or Password" })
    }

    const rider = await Rider.findOne({email}).select("+password")

    if (!rider) {
        return res.status(401).json({ message: "Invalid email or password"})
    }

    const isMatch = await rider.comparePassword(password);

    if (!isMatch) {
        return res.status(401).json({ message: "Invalid email or password"})
    }

    const token = rider.generateAuthToken(); 
    res.cookie("token", token)

    return res.status(201).json({ token, rider, message: "Rider logged In Successfully"})

};

// Function for get rider profile

const getRiderProfile = async (req, res, next) => {
    return res.status(200).json(req.rider)

}

//Function for logout rider

const logoutRider = async (req, res, next) => {
    res.clearCookie("token")

    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(400).json({ message: 'Token is required'});
    }

    try {
        const existingToken = await BlackLisingTokens.findOne({ token });
    
        if (existingToken) {
            return res.status(200).json({ message: 'Token is already blacklisted' });
        }
    
        await BlackLisingTokens.create({token})
    
        return res.status(200).json({ message: "Logout successfully" })
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}


export { registerRider, loginRider, getRiderProfile, logoutRider}