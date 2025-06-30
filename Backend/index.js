import Dotenv from "dotenv"
import express from "express"
import mongoose from "mongoose"
import authRoute from "./Routes/auth.js"
import hotelsRoute from "./Routes/hotels.js"
import roomsRoute from "./Routes/rooms.js"
import usersRoute from "./Routes/users.js"
import cookieParser from "cookie-parser"

Dotenv.config()
let app = express()

app.listen(5000, () => {
    console.log("Server is running on Port Number: 5000")
})

app.use(express.json())
app.use(cookieParser())

app.use("/auth", authRoute)
app.use("/hotels", hotelsRoute)
app.use("/rooms", roomsRoute)
app.use("/users", usersRoute)

app.use((err, req, res, next) => {
    let errorStatus = err.status || 500
    let errorMessage = err.message || "Something went Wrong"
    res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    })
})



function connecDB() {
    try {
        mongoose.connect(process.env.MONGO)
        console.log("Connected to DB")

    } catch (error) {
        console.log(error)
    }
}
mongoose.connection.on("connected", () => {
    console.log("MongoDB Connected")
})

mongoose.connection.on("disconnected", () => {
    console.log("MongoDB Disconnected")
})
connecDB()