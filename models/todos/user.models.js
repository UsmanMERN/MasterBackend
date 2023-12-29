import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    userName: {
        type: String,
        require: true,
        unique: true,
        lowercase: true,
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
        unique: true
    }
}, { timestamps: true })

export const userModel = mongoose.model("user", userSchema)