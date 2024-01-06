import mongoose from "mongoose";

// const hospitalHours=new mongoose.Schema({

// })

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    salary: {
        type: String,
        required: true,
    },
    qualification: {
        type: String,
        required: true,
    },
    experienceInYears: {
        type: String,
        required: true,
    },
    workdInHospitals: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
    }],

}, { timestamps: true })

export const Doctor = mongoose.model("Doctor", doctorSchema)