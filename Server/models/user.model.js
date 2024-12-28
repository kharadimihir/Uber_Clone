import mongoose, { Schema } from "mongoose"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const userSchema = new Schema({
    fullName: {
        firstName: {
            type: String,
            required: true,
            minlength: [2, "First name must be at least 2 characters long"]
        },
        lastName: {
            type: String,
            minlength: [2, "Last name must be at least 2 characters long"]
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: [3, "Email must be at least 3 characters long"]
    },
    password: {
        type: String,
        required: true,
        unique: true,
        select: false,
    },

    socketId: {
        type: String
    }
});

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET_TOKEN, { expiresIn: "24h"});
    return token;
}


userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}

userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}


const User = mongoose.model("User", userSchema)

export default User