const express = require('express');
const router = express.Router();

const { createTickets, getTickets } = require('../../controllers/ticket');
const { protect } = require('../../middleware/auth');

router.route('/').get(protect, getTickets).post(protect, createTickets);

module.exports = router;
