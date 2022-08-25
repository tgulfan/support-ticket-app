const dotenv = require('dotenv').config();
const express = require('express');

const { errorHandler } = require('./middleware/error');

const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Welcome');
});

// Routes
app.use('/api/users', require('./routes/user'));

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on localhost:${PORT}`));
