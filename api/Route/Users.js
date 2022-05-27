import express from "express";
import {
  DeleteUser,
  getUser,
  GetUsers,
  UpdateUser,
} from "../Controllers/User.js";
import { VerifyToken, VerifyUser } from "../Utils/VerifiedToken.js";

const router = express.Router();

router.get("/checkauthentication", VerifyToken, (req, res, next) => {
  res.send("hello user , you are granted");
});

router.get("/checkuser:id", VerifyUser, (req, res, next) => {
  res.send("hello user , you are granted and are able to delete a user");
});

// UPDATE
router.put("/:id", UpdateUser);
// DELETE
router.delete("/:id", DeleteUser);
// GET

router.get("/:id", getUser);
// GET ALL

router.get("/", GetUsers);



export default router;
