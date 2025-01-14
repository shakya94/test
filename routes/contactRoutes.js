const express = require('express');
const router= express.Router();
const contact = require("../models/contacts");

router.post('/contact',async (req,res)=>{
    const contactdata = new contact(req.body);
    contactdata.save()
    .then(()=> res.status(500).json({message :"Sucess"}))
    .catch(err =>
    {
        res.status(500).json({message :err})
    }
    )
})

module.exports = router;
