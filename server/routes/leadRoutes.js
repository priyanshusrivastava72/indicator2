const express = require('express');
const router = express.Router();
const leadController = require('../controllers/leadController');

// Route for handling lead submission
router.post('/leads', leadController.createLead);

module.exports = router;
