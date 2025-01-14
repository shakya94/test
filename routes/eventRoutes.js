const express = require('express');
const event = require("../models/events");
const router =express.Router();

router.post('/event', async (req,res)=>{
    const eventdata = new event(req.body);
    eventdata.save()
    .then(()=> res.status(500).json({message:"Sucess"}))
    .catch(err =>
    {
        res.status(501).json({message: err})
    }
    )
});

router.put('/event/:id', async (req, res) => {
    const eventId = req.params.id;
    const updateData = req.body;

    try {
        const updatedEvent = await event.findByIdAndUpdate(eventId, updateData, { new: true, runValidators: true });
        
        if (!updatedEvent) {
            return res.status(404).json({ message: "Event not found" });
        }

        res.status(200).json({ message: "Event updated successfully", data: updatedEvent });
    } catch (err) {
        res.status(500).json({ message: "Failed to update event", error: err });
    }
});

router.get('/events', async (req, res) => {
    try {
        const events = await event.find({});
        res.status(200).json({ message: "Events retrieved successfully", data: events });
    } catch (err) {
        res.status(500).json({ message: "Failed to retrieve events", error: err });
    }
});

module.exports = router;