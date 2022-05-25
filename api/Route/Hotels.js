import express from "express";
import createHttpError from "http-errors";
import {CreateHotel,
        UpdateHotel,
        DeleteHotel,
        getHotel,
        GetHotels,
      } from "../Controllers/Hotel.js"


const router = express.Router();

// CREATE
router.post("/", CreateHotel);
// UPDATE

router.put("/:id", UpdateHotel);
// DELETE
router.delete("/:id", DeleteHotel) 
// GET

router.get("/:id", getHotel);
// GET ALL

router.get("/", GetHotels);

export default router;
