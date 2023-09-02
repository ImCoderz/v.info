const express = require('express');
const router = express.Router();
const sql=require('msnodesqlv8');
const connectionString="server=.\\SQLEXPRESS;Database=DONNEES;Trusted_Connection=Yes;Driver={SQL Server Native Client 10.0}";

router.get('/table', (req, res) => {
    sql.query(connectionString,"select * from dbo.COMMANDEF JOIN dbo.FOURNISSEUR ON FOURNISSEUR.CODE_FRS = COMMANDEF.CODE_FRS JOIN ENTROPOT ON ENTROPOT.REF_ENTROPOT = COMMANDEF.REF_ENTROPOT ",(err,commande)=>{
      if (err) {
        console.error('Error fetching user data:', err);
        res.status(500).json({ error: 'An error occurred while logging in.' });
      } 
      else {
        res.status(200).json(commande);
      }
   })
})
router.get('/tablearticle', (req, res) => {
    sql.query(connectionString,"select REF_ART,ARTICLE,STOCKG,MODELE,TAILLE,COULEUR,PA_HT,PA_TTC,PV_HT,PV_TTC from dbo.ARTICLE",(err,article)=>{
      if (err) {
        console.error('Error fetching user data:', err);
        res.status(500).json({ error: 'An error occurred while logging in.' });
      } 
      else {
        res.status(200).json(article);
      }
   })
})




module.exports = router;
