const express = require('express');
const router = express.Router();
const sql=require('msnodesqlv8');
const connectionString="server=.\\SQLEXPRESS;Database=DONNEES;Trusted_Connection=Yes;Driver={SQL Server Native Client 10.0}";


router.get('/', (req, res) => {
    sql.query(connectionString,"select * from dbo.FOURNISSEUR ",(err,fournisseurs)=>{
      if (err) {
        console.error('Error fetching user data:', err);
        res.status(500).json({ error: 'An error occurred while logging in.' });
      } else if (fournisseurs.length === 0) {
        res.status(401).json({ error: 'Invalid credentials.' });
      } else {
        res.status(200).json(fournisseurs);
      }
   })
  })
router.get('/:id', (req, res) => {
    const {id}=req.params
    console.log(id);
    sql.query(connectionString,"select * from dbo.FOURNISSEUR WHERE CODE_FRS = ? ",[id],(err,fournisseur)=>{
      if (err) {
        console.error('Error fetching user data:', err);
        res.status(500).json({ error: 'An error occurred while logging in.' });
      } else if (fournisseur.length === 0) {
        res.status(401).json({ error: 'Invalid credentials.' });
      } else {
        console.log(fournisseur);
        res.status(200).json(fournisseur);
      }
   })
  })
router.post('/add', (req, res) => {
    const {reference,comptable,name,npatente,identification,adresse,postale,pays,ville,telephone,fax,modepaiement,devise,objectif,siteWeb,email,rfa,livrsansbc,fournissiege,partir,paiment,livration}=req.body
    console.log(req.body);
    sql.query(connectionString,"insert INTO dbo.FOURNISSEUR (CODE_FRS,compte_compt,FOURNISSEUR,patente,identif,ADRESSE1,CP,PAYS,VILLE,TEL,FAX,REF_MODEPAIE,REF_DEVISE,OBJECTIF,Site,E_MAIL,RFA,livrsansbc,fournissiege,APARTIRDE,delailivraison,delaisliv) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)  ",[reference,comptable,name,npatente,identification,adresse,postale,pays,ville,telephone,fax,modepaiement,devise,objectif,siteWeb,email,rfa,livrsansbc,fournissiege,partir,paiment,livration],(err,fournisseur)=>{
      if (err) {
        console.error('Error fetching user data:', err);
        res.status(500).json({ error: 'An error occurred while logging in.' });
      } else {
        console.log(fournisseur);
        res.status(200).json({message:"Fournisseur Added"});
      }
   })

  })
  router.put('/edit/:id', (req, res) => {
    const {
      reference, comptable, name, npatente, identification, adresse, postale, pays, ville,
      telephone, fax, modepaiement, devise, objectif, siteWeb, email, rfa, livrsansbc,
      fournissiege, partir, paiment, livration
    } = req.body;
    const { id } = req.params;
  
    // Define SQL queries
    const deleteQuery = "DELETE FROM dbo.FOURNISSEUR WHERE CODE_FRS = ?";
    const insertQuery = `
      INSERT INTO dbo.FOURNISSEUR (
        CODE_FRS, compte_compt, FOURNISSEUR, patente, identif, ADRESSE1, CP, PAYS, VILLE, 
        TEL, FAX, REF_MODEPAIE, REF_DEVISE, OBJECTIF, Site, E_MAIL, RFA, livrsansbc, 
        fournissiege, APARTIRDE, delailivraison, delaisliv
      ) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
  
    // Execute the delete query
    sql.query(connectionString, deleteQuery, [id], (deleteErr) => {
      if (deleteErr) {
        console.error('Error deleting fournisseur:', deleteErr);
        return res.status(500).json({ error: 'An error occurred while deleting fournisseur.' });
      }
  
      // Execute the insert query
      sql.query(connectionString, insertQuery, [reference, comptable, name, npatente, identification, adresse, postale, pays, ville, telephone, fax, modepaiement, devise, objectif, siteWeb, email, rfa, livrsansbc, fournissiege, partir, paiment, livration], (insertErr) => {
        if (insertErr) {
          console.error('Error inserting fournisseur:', insertErr);
          return res.status(500).json({ error: 'An error occurred while inserting fournisseur.' });
        }
  
        console.log('Fournisseur modified');
        return res.status(200).json({ message: 'Fournisseur modified' });
      });
    });
  });
  
router.delete('/delete/:id', (req, res) => {
    const {id}=req.params
    console.log(id);
    sql.query(connectionString,"delete from dbo.FOURNISSEUR WHERE CODE_FRS = ? ",[id],(err,fournisseur)=>{
      if (err) {
        console.error('Error fetching user data:', err);
        res.status(500).json({ error: 'An error occurred while logging in.' });
      } else {
        console.log(fournisseur);
        res.status(200).json({message:"fournisseur has been deleted"});
      }
   })
})


  module.exports = router;
