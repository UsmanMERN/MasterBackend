// const express = require("express");
// const dotenv = require("dotenv");
import express from "express";
import dotenv from "dotenv";
dotenv.config()
const app = express()

app.get("/", (req, res) => {
    res.json("Server is running oo yeah")
})


const port = process.env.PORT || 8000
// const port = process.env.PORT || 8000 yawo oo yeah


app.listen(port, () => {
    console.log("app is running on PORT", port);
})