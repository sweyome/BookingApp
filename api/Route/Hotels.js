import express from "express";
import createHttpError from "http-errors";
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

router.put("/:id", async (req, res) => {
  try {
    const UpdatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(UpdatedHotel); // if successfully return this
  } catch (error) {
    res.status(500).json(error);
  }
});
// DELETE
router.delete("/:id", async (req, res) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel has been Deleted"); // if successfully return this
  } catch (error) {
    res.status(500).json(error);
  }
});
// GET

router.get("/:id", async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel); // if successfully return this
  } catch (error) {
    res.status(500).json(error);
  }
});
// GET ALL

router.get("/", async (req, res, next) => {
  //   const failed = true;

  //   if (failed) return next(createHttpError(404, "you are not Authenticated"));

  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels); // if successfully return this
  } catch (err) {
    next(err);
  }
});

export default router;
