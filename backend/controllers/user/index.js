const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');

const generateToken = require('../../utils/generate-token');
const User = require('../../models/user');

// Get logged in user data route
// /api/users/me
const getMe = asyncHandler(async (req, res) => {
  const { _id, email, name } = req.user;
  const user = {
    id: _id,
    email,
    name,
  };
  res.status(200).json(user);
});

// Login user route
// /api/users/login
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  // check user and pw match
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error('Invalid credentials');
  }
});

// User registration route
// /api/users
const registerUser = asyncHandler(async (req, res) => {
  const { email, name, password } = req.body;

  if (!email || !name || !password) {
    res.status(400);
    throw new Error('Please include all fields');
  }

  // Find if user already exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  // Hash pw
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new error('Invalid user data');
  }
});

module.exports = {
  getMe,
  loginUser,
  registerUser,
};
