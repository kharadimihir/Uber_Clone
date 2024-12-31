import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import User from "../models/user.model.js"
import Rider from "../models/rider.model.js";

const authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

    const isBlacklisted = await User.findOne( {token: token})

    if (isBlacklisted) {
        return res.status(400).json({ message: "Unauthorized user"})
    }

    try {
        if (!token) {
            return res.status(400).json({ message: "Unauthorized user"})
        }
    
        const decoded = jwt.verify(token, process.env.JWT_SECRET_TOKEN)
        const user = await User.findById(decoded._id)
    
        if (!user) {
            return res.status(501).json({ message: "User not found"})
        }
    
        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized user"})
    }
};

const authRider = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

    const isBlacklisted = await Rider.findOne({token: token});

    if (isBlacklisted) {
        return res.status(400).json({ message: "Unauthorized rider"})
    }

   try {
     if (!token) {
         return res.status(400).json({ message: "Unauthorized rider"})
     }
 
     const decoded = jwt.verify(token, process.env.JWT_SECRET_TOKEN)
     const rider = await Rider.findById(decoded._id);
 
     if (!rider) {
         return res.status(401).json({ message: "Rider not found" })
     }
 
     req.rider = rider;
     next();
   } catch (error) {
    return res.status(401).json({ message: "Unauthorized rider" })
   }
}

export { authUser, authRider }