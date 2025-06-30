import express from "express";
import { createHotel, deleteHotel, updateHotel, getHotel, getHotels } from "../Controllers/hotelController.js";
import { verifyAdmin} from "../utils/verifyToken.js";

let route = express.Router()

// CREATE
route.post("/", verifyAdmin, createHotel)

// UPDATE
route.put("/:id", verifyAdmin, updateHotel)

// GETONE
route.get("/:id", getHotel)

// GETALL
route.get("/", getHotels)

// DELETE
route.delete("/:id", verifyAdmin, deleteHotel)

export default route