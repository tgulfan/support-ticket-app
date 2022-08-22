const loginUser = (request, response) => {
  response.send('login route');
};

const registerUser = (request, response) => {
  response.send('register route');
};

module.exports = {
  loginUser,
  registerUser,
};
