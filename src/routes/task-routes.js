 const express = require('express');
 const router = express.Router();
 const Task = require('../models/task')


router.get('/', async (req,res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

router.post('/', async (req,res) => {
    const { title, description} = req.body;
    const task = new Task ({title : title, description: description});
    await task.save();
    res.json({Status: "Task saved"});
});

module.exports = router;