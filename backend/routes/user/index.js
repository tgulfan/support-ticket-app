const express = require('express');

const { getMe, loginUser, registerUser } = require('../../controllers/user');
const { protect } = require('../../middleware/auth');

const router = express.Router();

router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/me', protect, getMe);

module.exports = router;
