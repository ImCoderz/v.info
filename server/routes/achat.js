const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send('Make an achat.');
    // const selectQuery = 'SELECT * FROM users WHERE achat_id = ?';
    // connection.query(selectQuery, [achat_id], (err, rows) => {
    //   if (err) {
    //     console.error('Error fetching user data:', err);
    //     res.status(500).json({ error: 'An error occurred while logging in.' });
    //   } else if (rows.length === 0) {
    //     res.status(401).json({ error: 'Invalid credentials.' });
    //   } else {
    //     const user = rows[0];
    //     res.status(200).json({ message: 'Login successful.', user });
    //   }
    // });
});


router.post('/add', (req, res) => {
    const { username, password, role } = req.body;
  
    // Perform any necessary validation here
  
    // Insert user data into the database
    const insertQuery = 'INSERT INTO users (username, password, role_id) VALUES (?, ?, ?)';
    connection.query(insertQuery, [username, password, role], (err, result) => {
      if (err) {
        console.error('Error registering user:', err);
        res.status(500).json({ error: 'An error occurred while registering the user.' });
      } else {
        res.status(200).json({ message: 'User registered successfully.' });
      }
    });
  });

  module.exports = router;
