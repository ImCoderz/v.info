// routes/index.js
const express = require('express');
const router = express.Router();
const sql=require('msnodesqlv8');
const connectionString="server=.\\SQLEXPRESS;Database=DONNEES;Trusted_Connection=Yes;Driver={SQL Server Native Client 10.0}";
const jwt=require("jsonwebtoken")

// server.js

// ... (previously defined code)

// User registration
// router.post('/register', (req, res) => {
//     const { username, password, role } = req.body;
  
//     // Perform any necessary validation here
  
//     // Insert user data into the database
//     const insertQuery = 'INSERT INTO users (username, password, role_id) VALUES (?, ?, ?)';
//     connection.query(insertQuery, [username, password, role], (err, result) => {
//       if (err) {
//         console.error('Error registering user:', err);
//         res.status(500).json({ error: 'An error occurred while registering the user.' });
//       } else {
//         res.status(200).json({ message: 'User registered successfully.' });
//       }
//     });
//   });
  
  // User login
  router.post('/login', (req, res) => {
    console.log(req.body);
   
    const { username, password } = req.body;
    sql.query(connectionString,"select * from dbo.UTILISATEUR WHERE UTILISATEUR = ? AND PWD = ?",[username, password],(err,rows)=>{
      if (err) {
        console.error('Error fetching user data:', err);
        res.status(500).json({ error: 'An error occurred while logging in.' });
      } else if (rows.length === 0) {
        res.status(401).json({ error: 'Invalid credentials.' });
      } else {
        const user = rows[0];
        user["PWD"]=null
        delete user["PWD"]
        console.log(user);
        const token =jwt.sign({id:user.id,username:user.username},"voieinfosecretkey")
        res.status(200).json({ message: 'Login successful.',...user,token});
      }
   })
  })
    // Perform any necessary validation here
  
    // Check user credentials in the database
  //   const selectQuery = 'SELECT * FROM users WHERE UTILISATEUR = ? AND PWD = ?';
  //   connection.query(selectQuery, [username, password], (err, rows) => {
  //     if (err) {
  //       console.error('Error fetching user data:', err);
  //       res.status(500).json({ error: 'An error occurred while logging in.' });
  //     } else if (rows.length === 0) {
  //       res.status(401).json({ error: 'Invalid credentials.' });
  //     } else {
  //       const user = rows[0];
  //       console.log(user);
  //       res.status(200).json({ message: 'Login successful.', user });
  //     }
  //   });
  // });
  
  // router.post('/add_user', (req, res) => {
  //   const { username, password } = req.body;
  
  //   // Use a parameterized query to insert user data into the database
  //   const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
  //   connection.query(query, [username, password], (err, result) => {
  //     if (err) {
  //       console.error('Error executing the query:', err);
  //       res.status(500).json({ error: 'An error occurred while adding the user.' });
  //     } else {
  //       console.log('User added successfully.');
  //       res.status(200).json({ message: 'User added successfully.' });
  //     }
  //   });
  // });
  // // ... (more routes and middleware)

    router.get('/', (req, res) => {

      sql.query(connectionString,"select * from dbo.UTILISATEUR WHERE UTILISATEUR = ? AND PWD = ?",["ADMINISTRATEUR", "îãâßì"],(err,rows)=>{
        console.log(rows);
      })
    });



module.exports = router;
