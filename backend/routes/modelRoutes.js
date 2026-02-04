const express = require('express');
const router = express.Router();
const Model = require('../models/Model');

// GET all models
router.get('/', async (req, res) => {
  try {
    const models = await Model.find(); // should fetch all
    res.json(models);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST (to add new models manually for now)
router.post('/', async (req, res) => {
  const { name, folder, description, thumbnail } = req.body;
  try {
    const newModel = new Model({ name, folder, description, thumbnail });
    await newModel.save();
    res.status(201).json(newModel);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// UPDATE a model
router.put('/:id', async (req, res) => {
  const { name, folder, description, thumbnail } = req.body;
  try {
    const updatedModel = await Model.findByIdAndUpdate(
      req.params.id,
      { name, folder, description, thumbnail },
      { new: true }
    );
    res.json(updatedModel);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE a model by ID
router.delete('/:id', async (req, res) => {
  try {
    await Model.findByIdAndDelete(req.params.id);
    res.json({ message: 'Model deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});




module.exports = router;
