import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import User from "../models/user.model.js"

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
}

export { authUser }