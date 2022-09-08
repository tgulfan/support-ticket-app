const asyncHandler = require('express-async-handler');

const User = require('../../models/user');
const Ticket = require('../../models/ticket');

// Get user tickets
// /api/tickets

const getTickets = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'getTickets' });
});

const createTickets = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'create Ticket' });
});

module.exports = { getTickets, createTickets };
