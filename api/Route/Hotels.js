import express from "express";
import Hotel from "../Models/Hotel.js";

const router = express.Router();

// CREATE
router.post("/", async (req, res) => {
  const newHotel = new Hotel(req.body);
  try {
    const SaveHotel = await newHotel.save();
    res.status(200).json(SaveHotel);
  } catch (error) {
    res.status(500).json(error);
  }
});
// UPDATE

router.post("/", async (req, res) => {
    const newHotel = new Hotel(req.body);
    try {
      const SaveHotel = await newHotel.save();
      res.status(200).json(SaveHotel);
    } catch (error) {
      res.status(500).json(error);
    }
  });
// DELETE
// GET
// GET ALL

export default router;
