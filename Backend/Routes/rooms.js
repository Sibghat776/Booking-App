import express from "express";
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from "../Controllers/roomsController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

let route = express.Router()

// CREATE
route.post("/:hotelId", verifyAdmin, createRoom)

// UPDATE
route.put("/:id", verifyAdmin, updateRoom)

// GETONE
route.get("/:id", getRoom)

// GETALL
route.get("/", getRooms)

// DELETE
route.delete("/:id/:hotelid", verifyAdmin, deleteRoom)

export default route