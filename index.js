import express from "express";

const app = express()

app.get("/test", (req, res) => {
    return res.send("Ok to go 1")
})

app.listen(5000, () => {
    console.log("Server running on port 5000")
})