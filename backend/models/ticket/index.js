const mongoose = require('mongoose');

const ticketSchema = mongoose.Schema(
  {
    user: {
      ref: 'user',
      required: true,
      type: mongoose.Schema.Types.ObjectId,
    },
    product: {
      enum: ['iPhone', 'Macbook Pro', 'iMac', 'iPad'],
      required: [true, 'Please select a product'],
      type: String,
    },
    description: {
      required: [true, 'Please enter a decription of the issue'],
      type: String,
    },
    status: {
      default: 'new',
      enum: ['new', 'open', 'closed'],
      required: true,
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Ticket', ticketSchema);
