const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.use(bodyParser.json())


const authRoute = require('./routes/auth');
const achatRoute = require('./routes/achat');
const clientRoute = require('./routes/client');
const utilsRoute = require('./routes/utils');
const articleRoute = require('./routes/article');
const commandeRoute = require('./routes/commande');
const fournisseursRoute = require('./routes/fournisseurs');
const json = require('body-parser/lib/types/json');

app.use('/auth', authRoute);
app.use('/achat', achatRoute);
app.use('/fournisseurs', fournisseursRoute);
app.use('/client', clientRoute);
app.use('/utils', utilsRoute);
app.use('/article', articleRoute);
app.use('/commande', commandeRoute);




// Create a MySQL connection


// Define a route to handle user input



// Start the server
app.listen(8000, () => {
  console.log('Server is running on http://localhost:8000');
});
