import express from "express"
import { body } from "express-validator"
import { getUserProfile, loginUser, logoutUser, registerUser } from "../controllers/user.controller.js";
import { authUser } from "../middlewares/Auth.middleware.js";

const router = express.Router();

router.get("/hi", (req, res) => {
    res.send("App is running or hi")
})

router.post("/register", [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullName.firstName").isLength({ min: 2 }).withMessage("First name must be at least 2 characters long"),
    body("password").isLength( { min: 6 }).withMessage("Password must be at least 6 characters long")
], registerUser)

router.post("/login" ,[
    body("email").isEmail().withMessage("Invalid Email"),
    body("password").isLength({ min: 6}).withMessage("Password must be at least 6 characters long")
], loginUser)

router.get("/profile", authUser, getUserProfile)

router.get("/logout", authUser, logoutUser)



export default router