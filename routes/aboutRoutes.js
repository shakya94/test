const express = require('express');
const router= express.Router();
const about = require("../models/about");

router.post('/about',async (req,res)=>{
    const aboutdata = new about(req.body);
    aboutdata.save()
    .then(()=> res.status(500).json({message :"Sucess"}))
    .catch(err =>
    {
        res.status(500).json({message :err})
    }
    )
})

module.exports = router;