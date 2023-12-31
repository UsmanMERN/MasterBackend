import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    content: {
        type: String,
        require: true,
    },
    complete: {
        type: Boolean,
        default: false,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    subTodo: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "subTodo"
    }]
}, { timestamps: true })

export const todoModel = mongoose.model("Todo", todoSchema)