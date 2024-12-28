import mongoose, {Schema} from "mongoose";

const blackListingShcema = new Schema({
    token: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 86400
    }
});

const BlackLisingTokens = mongoose.model("BlackLisingTokens", blackListingShcema)
export default BlackLisingTokens