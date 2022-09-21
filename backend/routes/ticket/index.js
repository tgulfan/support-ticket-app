const express = require('express');
const router = express.Router();

const {
  createTickets,
  getTicket,
  getTickets,
  deleteTicket,
  updateTicket,
} = require('../../controllers/ticket');
const { protect } = require('../../middleware/auth');

router.route('/').get(protect, getTickets).post(protect, createTickets);
router
  .route('/:id')
  .get(protect, getTicket)
  .delete(protect, deleteTicket)
  .put(protect, updateTicket);

module.exports = router;
