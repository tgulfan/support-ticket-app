const asyncHandler = require('express-async-handler');

// Login user route
// /api/users/login
const loginUser = asyncHandler(async (req, res) => {
  res.send('login route');
});

// User login route
// /api/users
const registerUser = asyncHandler(async (req, res) => {
  const { email, name, password } = req.body;

  if (!email || !name || !password) {
    res.status(400);
    throw new Error('Please include all fields');
  }

  res.send('register route');
});

module.exports = {
  loginUser,
  registerUser,
};
