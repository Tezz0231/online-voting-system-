const login = (req, res) => {
  res.render('login', { title: 'Login' });
};

const handleLogin = (req, res) => {
  const { username, password } = req.body;

  // Here you would typically validate the credentials against a database
  // For demonstration purposes, let's assume any non-empty username and password are valid
  if (username && password) {
      return res.redirect('/'); // Redirect to home page after successful login
  }
  
  // If validation fails, re-render the login page with an error message
  res.render('login', { title: 'Login', error: 'Invalid credentials' });
};

module.exports = {
  login,
  handleLogin
};
