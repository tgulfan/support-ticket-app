const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    name: {
      required: [true, 'Please add a name'],
      type: String,
    },
    email: {
      required: [true, 'Please add an email'],
      type: String,
      unique: true,
    },
    password: {
      required: [true, 'Please add password'],
      type: String,
    },
    isAdmin: {
      default: false,
      required: true,
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);
