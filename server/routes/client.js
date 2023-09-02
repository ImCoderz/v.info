const express = require('express');
const router = express.Router();
const sql=require('msnodesqlv8');
const connectionString="server=.\\SQLEXPRESS;Database=DONNEES;Trusted_Connection=Yes;Driver={SQL Server Native Client 10.0}";


router.get('/', (req, res) => {
    sql.query(connectionString,"select * from dbo.CLIENT ",(err,clients)=>{
      if (err) {
        console.error('Error fetching user data:', err);
        res.status(500).json({ error: 'An error occurred while logging in.' });
      } else if (clients.length === 0) {
        res.status(401).json({ error: 'Invalid credentials.' });
      } else {
        res.status(200).json(clients);
      }
   })
  })
router.get('/site/:id', (req, res) => {
    sql.query(connectionString,"select * from dbo.clientsite where  ",(err,clients)=>{
      if (err) {
        console.error('Error fetching user data:', err);
        res.status(500).json({ error: 'An error occurred while logging in.' });
      } else if (clients.length === 0) {
        res.status(401).json({ error: 'Invalid credentials.' });
      } else {
        res.status(200).json(clients);
      }
   })
  })
router.get('/:id', (req, res) => {
    const {id}=req.params
    console.log(id);
    sql.query(connectionString,"select * from dbo.CLIENT WHERE CODE_CLT = ? ",[id],(err,client)=>{
      if (err) {
        console.error('Error fetching user data:', err);
        res.status(500).json({ error: 'An error occurred while logging in.' });
      } else if (client.length === 0) {
        res.status(401).json({ error: 'Invalid credentials.' });
      } else {
        console.log(client);
        res.status(200).json(client);
      }
   })
  })
router.post('/add', (req, res) => {
    const {CODE_CLT,compte_compt,CLIENT,RC,ICE,IF1,ADRESSE1LIV,ADRESSE2LIV,CPLIV,VILLELIV,ADRESSE1FACT,ADRESSE2FACT,CPFACT,VILLEFACT,PAYS,TEL,telephone2,FAX,E_MAIL,Site,REMCAISSE,plafond,soldereel,solde,APARTIRDE,bloqued,plafonne,factur,REF_MODEPAIE,ref_modepaiepremier,CODE_COM}=req.body
    console.log(req.body);
    sql.query(connectionString,"insert INTO dbo.CLIENT (CODE_CLT,compte_compt,CLIENT,RC,ICE,IF1,ADRESSE1LIV,ADRESSE2LIV,CPLIV,VILLELIV,ADRESSE1FACT,ADRESSE2FACT,CPFACT,VILLEFACT,PAYS,TEL,telephone2,FAX,E_MAIL,Site,REMCAISSE,plafond,soldereel,solde,APARTIRDE,BLOQUER,plafonnee,factimediat,REF_MODEPAIE,ref_modepaiepremier,CODE_COM) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)  ",[CODE_CLT,compte_compt,CLIENT,RC,ICE,IF1,ADRESSE1LIV,ADRESSE2LIV,CPLIV,VILLELIV,ADRESSE1FACT,ADRESSE2FACT,CPFACT,VILLEFACT,PAYS,TEL,telephone2,FAX,E_MAIL,Site,REMCAISSE,plafond,soldereel,solde,APARTIRDE,bloqued,plafonne,factur,REF_MODEPAIE,ref_modepaiepremier,CODE_COM],(err,client)=>{
      if (err) {
        console.error('Error fetching user data:', err);
        res.status(500).json({ error: 'An error occurred while logging in.' });
      } else {
        console.log(client);
        res.status(200).json({message:"client Added"});
      }
   })

  })
// Update a client
router.put('/edit/:id', (req, res) => {
  const { id } = req.params;
  const clientData = req.body;

  const updateQuery = `
    UPDATE dbo.CLIENT
    SET 
      compte_compt = ?,
      CLIENT = ?,
      RC = ?,
      ICE = ?,
      IF1 = ?,
      ADRESSE1LIV = ?,
      ADRESSE2LIV = ?,
      CPLIV = ?,
      VILLELIV = ?,
      ADRESSE1FACT = ?,
      ADRESSE2FACT = ?,
      CPFACT = ?,
      VILLEFACT = ?,
      PAYS = ?,
      TEL = ?,
      telephone2 = ?,
      FAX = ?,
      E_MAIL = ?,
      Site = ?,
      REMCAISSE = ?,
      plafond = ?,
      soldereel = ?,
      solde = ?,
      APARTIRDE = ?,
      BLOQUER = ?,
      plafonnee = ?,
      factimediat = ?,
      REF_MODEPAIE = ?,
      ref_modepaiepremier = ?,
      CODE_COM = ?
    WHERE CODE_CLT = ?
  `;

  const params = [
    clientData.compte_compt, clientData.CLIENT, clientData.RC, clientData.ICE, clientData.IF1,
    clientData.ADRESSE1LIV, clientData.ADRESSE2LIV, clientData.CPLIV, clientData.VILLELIV,
    clientData.ADRESSE1FACT, clientData.ADRESSE2FACT, clientData.CPFACT, clientData.VILLEFACT,
    clientData.PAYS, clientData.TEL, clientData.telephone2, clientData.FAX, clientData.E_MAIL,
    clientData.Site, clientData.REMCAISSE, clientData.plafond, clientData.soldereel, clientData.solde,
    clientData.APARTIRDE, clientData.BLOQUER, clientData.plafonnee, clientData.factimediat,
    clientData.REF_MODEPAIE, clientData.ref_modepaiepremier, clientData.CODE_COM,
    id,
  ];

  sql.query(connectionString, updateQuery, params, (err) => {
    if (err) {
      console.error('Error updating client:', err);
      return res.status(500).json({ error: 'An error occurred while updating client.' });
    }

    console.log('Client changed');
    return res.status(200).json({ message: 'Client changed' });
  });
});

// Delete a client
router.delete('/delete/:id', (req, res) => {
  const { id } = req.params;
  console.log(id);

  const deleteQuery = 'DELETE FROM dbo.CLIENT WHERE CODE_CLT = ?';

  sql.query(connectionString, deleteQuery, [id], (err) => {
    if (err) {
      console.error('Error deleting client:', err);
      return res.status(500).json({ error: 'An error occurred while deleting client.' });
    }

    console.log('Client deleted');
    return res.status(200).json({ message: 'Client deleted' });
  });
});



  module.exports = router;
