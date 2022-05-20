import express  from "express"

const router = express.Router();

router.get("/", (req, res) => {
    res.send("this is from rooms end point")
})


export default router;