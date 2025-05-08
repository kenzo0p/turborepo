import express = require("express");
const app = express();

app.get("/signup" , (req , res) => {
    res.send("Hellow World")
})

app.get("/signin" , (req,res) => {
    res.send("Hellow world")
})

app.get("/chat" , (req , res) => {
    res.send(("Hellow world"))
})
app.listen(3005)