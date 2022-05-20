import express  from "express";

const router = express.Router();

router.get('/', (req,res) =>{
    res.send("hello, this is Auth end Point")
})
router.get('/register', (req,res) =>{
    res.send("hello, this is Register end Point")
})

export default router;