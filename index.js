// const express = require("express");
// const dotenv = require("dotenv");
import express from "express";
import dotenv from "dotenv";
dotenv.config()
const app = express()

app.get("/", (req, res) => {
    res.json("Server is running oo yeah")
})

app.get("/api/jokes", (req, res) => {
    const dummyData = [
        {
            "title": "Our History",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sagittis egestas ante, sed viverra nunc tincidunt nec eleifend etiram."
        },
        {
            "title": "Our Mission",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sagittis egestas ante, sed viverra nunc tincidunt nec eleifend etiram."
        },
        {
            "title": "Who We Are",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sagittis egestas ante, sed viverra nunc tincidunt nec eleifend etiram."
        }
    ];
    res.send(dummyData)
})

const port = process.env.PORT || 8000


app.listen(port, () => {
    console.log("app is running on PORT", port);
})