const express = require('express');
const Image = require("../models/images");
const router =express.Router();
const cors = require("./cors");

router.post('/images', async (req,res)=>{
    const imagesdata = new Image(req.body);
    imagesdata.save()
    .then(()=> res.status(200).json({message:"Sucess"}))
    .catch(err =>
    {
        res.status(501).json({message: err})
    }
    )
});

router.get('/images',cors, async (req, res) => {
    try {
        const images = await Image.find({});
        res.status(200).json({ message: "Images retrieved successfully", data: images });
    } catch (err) {
        res.status(500).json({ message: "Failed to retrieve images", error: err });
    }
});

router.put('/images/:id', async (req, res) => { //update image
    const imageId = req.params.id;
    const updateData = req.body;

    try {
        const updatedImage = await Image.findByIdAndUpdate(imageId, updateData, { new: true, runValidators: true });
        
        if (!updatedImage) {
            return res.status(404).json({ message: "Image not found" });
        }

        res.status(200).json({ message: "Image updated successfully", data: updatedImage });
    } catch (err) {
        res.status(500).json({ message: "Failed to update image", error: err });
    }
});

module.exports = router;
