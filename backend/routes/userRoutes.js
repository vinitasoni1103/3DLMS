const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Model = require('../models/Model');

// Register
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ error: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: 'Invalid credentials' });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get assigned models for a user
router.get('/:id/models', async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate('assignedModels');
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user.assignedModels);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST assigned
router.post('/:id/assign-models', async (req, res) => {
  const { assignedModels } = req.body;
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { assignedModels },
      { new: true }
    ).populate('assignedModels');

    res.json({ message: 'Models assigned successfully', user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const users = await User.find().populate('assignedModels', 'name');
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;
