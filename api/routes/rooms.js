import express from "express";
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom, updateRoomavailability } from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();

// create
router.post("/:hotelid", verifyAdmin, createRoom);

// UPDATE

router.put("/:id/", verifyAdmin, updateRoom);
router.put("/availability/:id", updateRoomavailability);

// DELETE

router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

// GET

router.get("/:id",getRoom);

// GETAll
router.get("/", getRooms);

export default router