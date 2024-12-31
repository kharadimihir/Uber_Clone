import express, { Router } from "express"
import { getRiderProfile, loginRider, logoutRider, registerRider } from "../controllers/rider.controller.js";
import { body } from "express-validator";
import { authRider } from "../middlewares/Auth.middleware.js";


const router = Router();

router.post("/register", [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullName.firstName").isLength({ min: 2}).withMessage("First name must be at least 2 characters long"),
    body("password").isLength({ min: 6}).withMessage("Password must be at least 6 characters long"),
    body("vehicle.color").isLength({ min: 3}).withMessage("Vehicle color must be at least 3 characters long"),
    body("vehicle.plate").isLength({ min: 3}).withMessage("Vehicle plate number must be at least 3 characters long"),
    body("vehicle.capacity").isInt({ min: 1}).withMessage("Capacity of vehicle msut be at least 1"),
    body("vehicle.vehicleType").isIn(["auto", "car", "motorcycle"]).withMessage("Invalid Credentials")
], registerRider)

router.post("/login", [
    body("email").isEmail().withMessage("Invalid Email"),
    body("password").isLength({ min: 6 }).withMessage("Password must be atleast 6 characters long")
], loginRider)

router.get("/profile", authRider, getRiderProfile)

router.get("/logout", authRider, logoutRider)

export default router;