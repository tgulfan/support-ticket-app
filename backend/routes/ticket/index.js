const express = require('express');
const router = express.Router();

const {
  createTickets,
  getTicket,
  getTickets,
} = require('../../controllers/ticket');
const { protect } = require('../../middleware/auth');

router.route('/').get(protect, getTickets).post(protect, createTickets);
router.route('/:id').get(protect, getTicket);

module.exports = router;
