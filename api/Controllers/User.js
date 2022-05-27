import User from "../Models/User.js";


export const UpdateUser = async (req, res, next) => {
  try {
    const UpdatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(UpdatedUser); // if successfully return this
  } catch (err) {
    next(err);
  }
};
export const DeleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been Deleted"); // if successfully return this
  } catch (err) {
    next(err);
  }
};
export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user); // if successfully return this
  } catch (err) {
    next(err);
  }
};
export const GetUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users); // if successfully return this
  } catch (err) {
    next(err);
  }
};
