const dotenv = require('dotenv').config();
const express = require('express');

const PORT = process.env.PORT || 4000;

const app = express();

app.get('/', (request, response) => {
  response.send('Welcome');
});

// Routes
app.use('/api/users', require('./routes/user'));

app.listen(PORT, () => console.log(`Server running on localhost:${PORT}`));
