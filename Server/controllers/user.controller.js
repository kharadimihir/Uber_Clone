import { compare } from "bcrypt";
import User from "../models/user.model.js";
import createUser from "../services/user.service.js";
import { validationResult } from "express-validator"
import BlackLisingTokens from "../models/blacklistingtokens.model.js";

// Function for register a New User
const registerUser = async (req, res, next) => {
    const errors = validationResult(req);

    if (errors.length === 0) {
        return res.status(400).json({ errors: errors.array()})
    }

    const { fullName, email, password } = req.body;
    const hashPassword = await User.hashPassword(password);

    const user = await createUser({
        firstName: fullName.firstName,
        lastName: fullName.lastName,
        email,
        password: hashPassword
    });

    const token = user.generateAuthToken();

    return res.status(201).json({ token, user, message: "User registered successfully" })
};


//Function for login a user
const loginUser = async (req, res, next) => {
    const errors = validationResult(req);

    if (errors.length === 0) {
        return res.status(400).json({ errors: errors.array()})
    }

    const { email, password } = req.body;

    const user = await User.findOne({email}).select("+password")

    if (!user) {
        return res.status(401).json({ message: "Invalid email or password"})
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
        return res.status(401).josn({ message: "Invalid email or password"})
    }

    const token = user.generateAuthToken()
    res.cookie("token", token)

    return res.status(201).json({ token, user, message: "User logged in successfully"})
}

//Function for getUerProfile
const getUserProfile = async (req, res, next) => {
   return res.status(200).json(req.user)
}

//Function for logout user
const logoutUser = async (req, res, next) => {
    res.clearCookie("token")

    const token = req.cookies.token || req.headers.authorization.split(" ")[1]
    await BlackLisingTokens.create({token})

    return res.status(200).json({ message: "Logout successfully"})
}


export { registerUser, loginUser, getUserProfile, logoutUser }