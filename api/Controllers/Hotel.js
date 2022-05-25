import Hotel from "../Models/Hotel.js";

export const CreateHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);
  
  try {
    const SaveHotel = await newHotel.save();
    res.status(200).json(SaveHotel);
  } catch (err) {
    next(err);
  }
};
export const UpdateHotel = async (req, res, next) => {
  try {
    const UpdatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(UpdatedHotel); // if successfully return this
  } catch (err) {
    next(err);
  }
};
export const DeleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel has been Deleted"); // if successfully return this
  } catch (err) {
    next(err);
  }
};
export const getHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel); // if successfully return this
  } catch (err) {
    next(err);
  }
};
export const GetHotels = async (req, res, next) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels); // if successfully return this
  } catch (err) {
    next(err);
  }
};
