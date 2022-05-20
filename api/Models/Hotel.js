import mongoose from "mongoose";
const { Schema } = mongoose;

const HotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  Type: {
    type: String,
    required: true,
  },
  City: {
    type: String,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
  Distance: {
    type: String,
    required: true,
  },
  Photos: {
    type: [String],
  },
  Desc: {
    type: String,
    required: true,
  },
  Title: {
    type: String,
    required: true,
  },
  Rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  rooms: {
    type: [String],
  },
  cheapestPrice: {
    type: Number,
  },
  featured: {
    type: Boolean,
  },
});

export default mongoose.model("Hotels", HotelSchema);
