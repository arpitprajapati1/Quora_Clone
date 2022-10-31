const express = require("express");
const router = express.Router();

router.get('/',(req,res)=>{
    res.send("postData router sucessfully !");
})

module.exports = router;