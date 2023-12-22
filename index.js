// const express = require("express");
// const dotenv = require("dotenv");

// import express from "express";
// import dotenv from "dotenv";
// dotenv.config()
// const app = express()

// app.get("/", (req, res) => {
//     res.json("Server is running oo yeah")
// })


// const port = process.env.PORT || 8000


// app.listen(port, () => {
//     console.log("app is running on PORT", port);
// })


import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";
const FILE_PATH = "./data.json"

const DATE = moment().format()

const date = {
    date: DATE
}

jsonfile.writeFile(FILE_PATH, date)