const express = require('express');
const router = express.Router();
const sql=require('msnodesqlv8');
const connectionString="server=.\\SQLEXPRESS;Database=DONNEES;Trusted_Connection=Yes;Driver={SQL Server Native Client 10.0}";


router.get('/', (req, res) => {
    sql.query(connectionString,"select * from dbo.ARTICLE ",(err,articles)=>{
      if (err) {
        console.error('Error fetching user data:', err);
        res.status(500).json({ error: 'An error occurred while logging in.' });
      } else if (articles.length === 0) {
        res.status(401).json({ error: 'Invalid credentials.' });
      } else {
        res.status(200).json(articles);
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
    sql.query(connectionString,"select * from dbo.ARTICLE WHERE REF_ART = ? ",[id],(err,article)=>{
      if (err) {
        console.error('Error fetching user data:', err);
        res.status(500).json({ error: 'An error occurred while logging in.' });
      } else if (article.length === 0) {
        res.status(401).json({ error: 'Invalid credentials.' });
      } else {
        console.log(article);
        res.status(200).json(article);
      }
   })
  })
  router.post('/add', (req, res) => {
    const {
        PHOTO, REF_ART, compte_compt, ARTICLE, MODELE, TAILLE, REFTAILLE, REFCOULEUR, COULEUR, REFCATEG, REF_MARQ,
        cout, cout1, cout2, cout3, TMARGE, PA_HT, PA_TTC, PV_HT, PV_TTC, TVA1, TVA2, tarif1, tarif2, tarif3, tarif4,
        tarif5, tarif6, tarif7, tarif8, tarif9, tarif10, PESAGE, PLU, ref_dep, REF_RAY, REF_SRAY, REF_FAM, REF_SFAM,
        ref_ssfam, REFACTIVITE, REFSAISON, CF1, CF2, CF3, CF4, CF5, CF6, CF7, CF8, CF9, CF10, ACHAT_BLOQ, VENTE_BLOQ,
        bloque, LIBCAISSE, LIBARABE, DATECREAT, DATEMODIF, DATE_PA, DATE_PV, PAMP, DERPAHT, STOCKG, COLISAGE, nbcolis,
        FACING, PROFONDEUR, unite, serialise
    } = req.body;

    const insertQuery = `
        INSERT INTO dbo.ARTICLE (
            PHOTO, REF_ART, compte_compt, ARTICLE, MODELE, TAILLE, REFTAILLE, REFCOULEUR, COULEUR, REFCATEG, REF_MARQ,
            cout, cout1, cout2, cout3, TMARGE, PA_HT, PA_TTC, PV_HT, PV_TTC, TVA1, TVA2, tarif1, tarif2, tarif3, tarif4,
            tarif5, tarif6, tarif7, tarif8, tarif9, tarif10, PESAGE, PLU, ref_dep, REF_RAY, REF_SRAY, REF_FAM, REF_SFAM,
            ref_ssfam, REFACTIVITE, REFSAISON, CF1, CF2, CF3, CF4, CF5, CF6, CF7, CF8, CF9, CF10, ACHAT_BLOQ, VENTE_BLOQ,
            bloque, LIBCAISSE, LIBARABE, DATECREAT, DATEMODIF, DATE_PA, DATE_PV, PAMP, DERPAHT, STOCKG, COLISAGE, nbcolis,
            FACING, PROFONDEUR, unite, serialise
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?,
        ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const params = [
        PHOTO, REF_ART, compte_compt, ARTICLE, MODELE, TAILLE, REFTAILLE, REFCOULEUR, COULEUR, REFCATEG, REF_MARQ,
        cout, cout1, cout2, cout3, TMARGE, PA_HT, PA_TTC, PV_HT, PV_TTC, TVA1, TVA2, tarif1, tarif2, tarif3, tarif4,
        tarif5, tarif6, tarif7, tarif8, tarif9, tarif10, PESAGE, PLU, ref_dep, REF_RAY, REF_SRAY, REF_FAM, REF_SFAM,
        ref_ssfam, REFACTIVITE, REFSAISON, CF1, CF2, CF3, CF4, CF5, CF6, CF7, CF8, CF9, CF10, ACHAT_BLOQ, VENTE_BLOQ,
        bloque, LIBCAISSE, LIBARABE,
        // Convert date strings to DATETIME or set to null if empty or null
        DATECREAT ? new Date(DATECREAT) : null,
        DATEMODIF ? new Date(DATEMODIF) : null,
        DATE_PA ? new Date(DATE_PA) : null,
        DATE_PV ? new Date(DATE_PV) : null,
        PAMP, DERPAHT, STOCKG, COLISAGE, nbcolis, FACING, PROFONDEUR, unite, serialise
    ];

    sql.query(connectionString, insertQuery, params, (err, article) => {
        if (err) {
            console.error('Error fetching user data:', err);
            res.status(500).json({ error: 'An error occurred while logging in.' });
        } else {
            console.log(article);
            res.status(200).json({ message: "article Added" });
        }
    });
});

  router.put('/edit/:id', (req, res) => {
    const { id } = req.params;
    const articleData = req.body;
  
    const updateQuery = `
      UPDATE dbo.ARTICLE
      SET 
        PHOTO = ?,
        REF_ART = ?,
        compte_compt = ?,
        ARTICLE = ?,
        MODELE = ?,
        TAILLE = ?,
        REFTAILLE = ?,
        REFCOULEUR = ?,
        COULEUR = ?,
        REFCATEG = ?,
        REF_MARQ = ?,
        cout = ?,
        cout1 = ?,
        cout2 = ?,
        cout3 = ?,
        TMARGE = ?,
        PA_HT = ?,
        PA_TTC = ?,
        PV_HT = ?,
        PV_TTC = ?,
        TVA1 = ?,
        TVA2 = ?,
        tarif1 = ?,
        tarif2 = ?,
        tarif3 = ?,
        tarif4 = ?,
        tarif5 = ?,
        tarif6 = ?,
        tarif7 = ?,
        tarif8 = ?,
        tarif9 = ?,
        tarif10 = ?,
        PESAGE = ?,
        PLU = ?,
        ref_dep = ?,
        REF_RAY = ?,
        REF_SRAY = ?,
        REF_FAM = ?,
        REF_SFAM = ?,
        ref_ssfam = ?,
        REFACTIVITE = ?,
        REFSAISON = ?,
        CF1 = ?,
        CF2 = ?,
        CF3 = ?,
        CF4 = ?,
        CF5 = ?,
        CF6 = ?,
        CF7 = ?,
        CF8 = ?,
        CF9 = ?,
        CF10 = ?,
        ACHAT_BLOQ = ?,
        VENTE_BLOQ = ?,
        bloque = ?,
        LIBCAISSE = ?,
        LIBARABE = ?,
        DATECREAT = CONVERT(DATETIME, ?, 120), -- Convert date string to DATETIME
        DATEMODIF = CONVERT(DATETIME, ?, 120), -- Convert date string to DATETIME
        DATE_PA = CONVERT(DATETIME, ?, 120), -- Convert date string to DATETIME
        DATE_PV = CONVERT(DATETIME, ?, 120), -- Convert date string to DATETIME
        PAMP = ?,
        DERPAHT = ?,
        STOCKG = ?,
        COLISAGE = ?,
        nbcolis = ?,
        FACING = ?,
        PROFONDEUR = ?,
        unite = ?,
        serialise = ?
      WHERE REF_ART = ?
    `;
  
    const params = [
      articleData.PHOTO, articleData.REF_ART, articleData.compte_compt, articleData.ARTICLE, articleData.MODELE,
      articleData.TAILLE, articleData.REFTAILLE, articleData.REFCOULEUR, articleData.COULEUR, articleData.REFCATEG,
      articleData.REF_MARQ, articleData.cout, articleData.cout1, articleData.cout2, articleData.cout3, articleData.TMARGE,
      articleData.PA_HT, articleData.PA_TTC, articleData.PV_HT, articleData.PV_TTC, articleData.TVA1, articleData.TVA2,
      articleData.tarif1, articleData.tarif2, articleData.tarif3, articleData.tarif4, articleData.tarif5, articleData.tarif6,
      articleData.tarif7, articleData.tarif8, articleData.tarif9, articleData.tarif10, articleData.PESAGE, articleData.PLU,
      articleData.ref_dep, articleData.REF_RAY, articleData.REF_SRAY, articleData.REF_FAM, articleData.REF_SFAM,
      articleData.ref_ssfam, articleData.REFACTIVITE, articleData.REFSAISON, articleData.CF1, articleData.CF2, articleData.CF3,
      articleData.CF4, articleData.CF5, articleData.CF6, articleData.CF7, articleData.CF8, articleData.CF9, articleData.CF10,
      articleData.ACHAT_BLOQ, articleData.VENTE_BLOQ, articleData.bloque, articleData.LIBCAISSE, articleData.LIBARABE,
      articleData.DATECREAT, // Provide date strings here
      articleData.DATEMODIF, // Provide date strings here
      articleData.DATE_PA, // Provide date strings here
      articleData.DATE_PV, // Provide date strings here
      articleData.PAMP, articleData.DERPAHT, articleData.STOCKG, articleData.COLISAGE, articleData.nbcolis, articleData.FACING,
      articleData.PROFONDEUR, articleData.unite, articleData.serialise, id,
    ];
  
    sql.query(connectionString, updateQuery, params, (err) => {
      if (err) {
        console.error('Error updating article:', err);
        return res.status(500).json({ error: 'An error occurred while updating article.' });
      }
  
      console.log('Article updated');
      return res.status(200).json({ message: 'Article updated' });
    });
  });
  
  

router.delete('/delete/:id', (req, res) => {
    const {id}=req.params
    console.log(id);
    sql.query(connectionString,"delete from dbo.ARTICLE WHERE REF_ART = ? ",[id],(err,article)=>{
      if (err) {
        console.error('Error fetching user data:', err);
        res.status(500).json({ error: 'An error occurred while logging in.' });
      } else{
        res.status(200).json({message:"article deleted"});
      }
   })
  })


  module.exports = router;

