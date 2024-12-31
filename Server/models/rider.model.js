    import mongoose, {Schema} from "mongoose";
    import jwt from "jsonwebtoken"
    import bcrypt from "bcrypt"

    const riderSchema = new Schema({
        fullName: {
            firstName: {
                type: String,
                required: true,
                minlength: [3, "Firstname must be 3 characters long"]
            },
            lastName: {
                type: String,
                minlength: [3, "Lastname name must be 3 characters long"]
            },
        },
        email: {
            type: String,
            unique: true,
            required: true,
            minlength: [3, "Email must be 3 characters long"]
        },
        password: {
            type: String,
            requied: true,
            unique: true,
            select: false
        },
        socketId: {
            type: String
        },
        status: {
            type: String,
            enum: ["active", "inactive"],
            default: "inactive"
        },

        vehicle: {
            color: {
                type: String,
                required: true,
                minlength: [3, "Color must be at least 3 character long"]
            },
            plate: {
                type: String,
                required: true,
                minlength: [3, "Plate must be at least 3 character long"]
            },
            capacity: {
                type: Number,
                required: true,
                min: [1, "Capacity must be at least 1"]
            },
            vehicleType: {
                type: String,
                required: true,
                enum: ["car", "auto", "motorcycle"]
            }
        },
        location: {
            lat: {
                type: Number
            },
            lng: {
                type: Number
            }
        }
    });

    riderSchema.methods.generateAuthToken = function () {
        if (!process.env.JWT_SECRET_TOKEN) {
            throw new Error("JWT_SECRET_TOKEN is not defined in the environment variables.");
        }
    
        const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET_TOKEN, { expiresIn: "24h" });
        return token;
    };

    riderSchema.methods.comparePassword = async function(password){
        return await bcrypt.compare(password, this.password)
    };

    riderSchema.statics.hashPassword = async function(password){
        return await bcrypt.hash(password, 10);
    };

    const Rider = mongoose.model("Rider", riderSchema);

    export default Rider;
