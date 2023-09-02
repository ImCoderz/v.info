const express = require('express');
const router = express.Router();
const sql=require('msnodesqlv8');
const connectionString="server=.\\SQLEXPRESS;Database=DONNEES;Trusted_Connection=Yes;Driver={SQL Server Native Client 10.0}";


router.get('/modepaiement', (req, res) => {
    sql.query(connectionString,"select * from dbo.MODEPAIEMENT",(err,modepaiements)=>{
      if (err) {
        console.error('Error fetching user data:', err);
        res.status(500).json({ error: 'An error occurred while logging in.' });
      } else if (modepaiements.length === 0) {
        res.status(401).json({ error: 'Invalid credentials.' });
      } else {
        res.status(200).json(modepaiements);
      }
   })
  })
router.get('/commercial', (req, res) => {
    sql.query(connectionString,"select * from dbo.COMMERCIAL",(err,commercial)=>{
      if (err) {
        console.error('Error fetching user data:', err);
        res.status(500).json({ error: 'An error occurred while logging in.' });
      } else if (commercial.length === 0) {
        res.status(401).json({ error: 'Invalid credentials.' });
      } else {
        res.status(200).json(commercial);
      }
   })
  })
router.get('/devise', (req, res) => {
    sql.query(connectionString,"select * from dbo.DEVISE",(err,devise)=>{
      if (err) {
        console.error('Error fetching user data:', err);
        res.status(500).json({ error: 'An error occurred while logging in.' });
      } else if (devise.length === 0) {
        res.status(401).json({ error: 'Invalid credentials.' });
      } else {
        res.status(200).json(devise);
      }
   })
  })
router.get('/taille', (req, res) => {
    sql.query(connectionString,"select * from dbo.TAILLE",(err,taille)=>{
      if (err) {
        console.error('Error fetching user data:', err);
        res.status(500).json({ error: 'An error occurred while logging in.' });
      } else if (taille.length === 0) {
        res.status(401).json({ error: 'Invalid credentials.' });
      } else {
        res.status(200).json(taille);
      }
   })
  })
router.get('/categorietaille', (req, res) => {
    sql.query(connectionString,"select * from dbo.CATEGORIETAILLE",(err,categorietaille)=>{
      if (err) {
        console.error('Error fetching user data:', err);
        res.status(500).json({ error: 'An error occurred while logging in.' });
      }
      else {
        res.status(200).json(categorietaille);
      }
   })
  })
router.get('/couleur', (req, res) => {
    sql.query(connectionString,"select * from dbo.COULEUR",(err,couleur)=>{
      if (err) {
        console.error('Error fetching user data:', err);
        res.status(500).json({ error: 'An error occurred while logging in.' });
      } else if (couleur.length === 0) {
        res.status(401).json({ error: 'Invalid credentials.' });
      } else {
        res.status(200).json(couleur);
      }
   })
  })
router.get('/marque', (req, res) => {
    sql.query(connectionString,"select * from dbo.Marque",(err,marque)=>{
      if (err) {
        console.error('Error fetching user data:', err);
        res.status(500).json({ error: 'An error occurred while logging in.' });
      } else if (marque.length === 0) {
        res.status(401).json({ error: 'Invalid credentials.' });
      } else {
        res.status(200).json(marque);
      }
   })
  })
router.get('/tva', (req, res) => {
    sql.query(connectionString,"select * from dbo.TVA",(err,tva)=>{
      if (err) {
        console.error('Error fetching user data:', err);
        res.status(500).json({ error: 'An error occurred while logging in.' });
      } else if (tva.length === 0) {
        res.status(401).json({ error: 'Invalid credentials.' });
      } else {
        res.status(200).json(tva);
      }
   })
  })
router.get('/rayon', (req, res) => {
    sql.query(connectionString,"select * from dbo.Rayon",(err,rayon)=>{
      if (err) {
        console.error('Error fetching user data:', err);
        res.status(500).json({ error: 'An error occurred while logging in.' });
      } else if (rayon.length === 0) {
        res.status(401).json({ error: 'Invalid credentials.' });
      } else {
        res.status(200).json(rayon);
      }
   })
  })
router.get('/srayon', (req, res) => {
    sql.query(connectionString,"select * from dbo.SRayon",(err,srayon)=>{
      if (err) {
        console.error('Error fetching user data:', err);
        res.status(500).json({ error: 'An error occurred while logging in.' });
      } else if (srayon.length === 0) {
        res.status(401).json({ error: 'Invalid credentials.' });
      } else {
        res.status(200).json(srayon);
      }
   })
  })
router.get('/famille', (req, res) => {
    sql.query(connectionString,"select * from dbo.FAMILLE",(err,famille)=>{
      if (err) {
        console.error('Error fetching user data:', err);
        res.status(500).json({ error: 'An error occurred while logging in.' });
      } else if (famille.length === 0) {
        res.status(401).json({ error: 'Invalid credentials.' });
      } else {
        res.status(200).json(famille);
      }
   })
  })
router.get('/sfamille', (req, res) => {
    sql.query(connectionString,"select * from dbo.SFAMILLE",(err,sfamille)=>{
      if (err) {
        console.error('Error fetching user data:', err);
        res.status(500).json({ error: 'An error occurred while logging in.' });
      } else if (sfamille.length === 0) {
        res.status(401).json({ error: 'Invalid credentials.' });
      } else {
        res.status(200).json(sfamille);
      }
   })
  })
router.get('/segment', (req, res) => {
    sql.query(connectionString,"select * from dbo.SSFAMILLE",(err,segment)=>{
      if (err) {
        console.error('Error fetching user data:', err);
        res.status(500).json({ error: 'An error occurred while logging in.' });
      } else if (segment.length === 0) {
        res.status(401).json({ error: 'Invalid credentials.' });
      } else {
        res.status(200).json(segment);
      }
   })
  })
router.get('/activite', (req, res) => {
    sql.query(connectionString,"select * from dbo.ACTIVITE",(err,activite)=>{
      if (err) {
        console.error('Error fetching user data:', err);
        res.status(500).json({ error: 'An error occurred while logging in.' });
      } 
      else {
        res.status(200).json(activite);
      }
   })
  })
router.get('/saison', (req, res) => {
    sql.query(connectionString,"select * from dbo.SAISON",(err,saison)=>{
      if (err) {
        console.error('Error fetching user data:', err);
        res.status(500).json({ error: 'An error occurred while logging in.' });
      } else if (saison.length === 0) {
        res.status(401).json({ error: 'Invalid credentials.' });
      } else {
        res.status(200).json(saison);
      }
   })
  })
router.get('/secteur', (req, res) => {
    sql.query(connectionString,"select * from dbo.departement",(err,departement)=>{
      if (err) {
        console.error('Error fetching user data:', err);
        res.status(500).json({ error: 'An error occurred while logging in.' });
      } else if (departement.length === 0) {
        res.status(401).json({ error: 'Invalid credentials.' });
      } else {
        res.status(200).json(departement);
      }
   })
  })
router.get('/entropot', (req, res) => {
    sql.query(connectionString,"select * from dbo.ENTROPOT",(err,entropot)=>{
      if (err) {
        console.error('Error fetching user data:', err);
        res.status(500).json({ error: 'An error occurred while logging in.' });
      } else if (entropot.length === 0) {
        res.status(401).json({ error: 'Invalid credentials.' });
      } else {
        res.status(200).json(entropot);
      }
   })
  })



  module.exports = router;
