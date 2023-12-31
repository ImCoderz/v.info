"use client"
import React,{useEffect,useState} from "react";




const columns = [
  {name: "REF_ART", uid: "REF_ART", sortable: true},
  {name: "REF_RAY", uid: "REF_RAY", sortable: true},
  {name: "REF_FAM", uid: "REF_FAM", sortable: true},
  {name: "REF_SFAM", uid: "REF_SFAM", sortable: true},
  {name: "ARTICLE", uid: "ARTICLE"},
  {name: "DATECREAT", uid: "DATECREAT", sortable: true},
  {name: "DATEMODIF", uid: "DATEMODIF", sortable: true},
  {name: "PHOTO", uid: "PHOTO"},
  {name: "LIBARABE", uid: "LIBARABE"},
  {name: "LIBCAISSE", uid: "LIBCAISSE"},
  {name: "TYPEART", uid: "TYPEART"},
  {name: "PA_HT", uid: "PA_HT"},
  {name: "TMARGE", uid: "TMARGE"},
  {name: "PV_HT", uid: "PV_HT"},
  {name: "PV_TTC", uid: "PV_TTC"},
  {name: "DATE_PV", uid: "DATE_PV"},
  {name: "DATE_PA", uid: "DATE_PA"},
  {name: "ACHAT_BLOG", uid: "ACHAT_BLOG"},
  {name: "VENTE_BLOG", uid: "VENTE_BLOG"},
  {name: "COMMENTAIRE", uid: "COMMENTAIRE"},
  {name: "PAMP", uid: "PAMP"},
  {name: "STOCKG", uid: "STOCKG"},
  {name: "TVA1", uid: "TVA1"},
  {name: "COLISAGE", uid: "COLISAGE"},
  {name: "PESAGE", uid: "PESAGE"},
  {name: "FACING", uid: "FACING"},
  {name: "PROFONDEUR", uid: "PROFONDEUR"},
  {name: "SECTION1", uid: "SECTION1"},
  {name: "PLU", uid: "PLU"},
  {name: "REF_MARQ", uid: "REF_MARQ"},
  {name: "CODEBARREINTERNE", uid: "CODEBARREINTERNE"},
  {name: "STOCKMINIMAL", uid: "STOCKMINIMAL"},
  {name: "STOCKMAXIMAL", uid: "STOCKMAXIMAL"},
  {name: "DERPAHT", uid: "DERPAHT"},
  {name: "GARANTIE", uid: "GARANTIE"},
  {name: "DESCRIPTION1", uid: "DESCRIPTION1"},
  {name: "DESCRIPTION2", uid: "DESCRIPTION2"},
  {name: "NSTOCKABLE", uid: "NSTOCKABLE"},
  {name: "REMISE", uid: "REMISE"},
  {name: "PRIXREMISETTC", uid: "PRIXREMISETTC"},
  {name: "REFACTIVITE", uid: "REFACTIVITE"},
  {name: "REFTAILLE", uid: "REFTAILLE"},
  {name: "REFCOULEUR", uid: "MATERIALDESCR"},
  {name: "LINEDESCR", uid: "LINEDESCR"},
  {name: "DISTCHANNEL", uid: "DISTCHANNEL"},
  {name: "MARKST", uid: "MARKST"},
  {name: "UTILISATEUR", uid: "UTILISATEUR"},
  {name: "REFCATEG", uid: "REFCATEG"},
  {name: "TAILLE", uid: "TAILLE"},
  {name: "COULEUR", uid: "COULEUR"},
  {name: "REFSAISON", uid: "REFSAISON"},
  {name: "MODELE", uid: "MODELE"},
  {name: "TMARQUE", uid: "TMARQUE"},
  {name: "afficher", uid: "afficher"},
  {name: "art", uid: "art"},
  {name: "ref_dep", uid: "ref_dep"},
  {name: "TYETIQ", uid: "TYETIQ"},
  {name: "compte_compt", uid: "compte_compt"},
  {name: "unite", uid: "unite"},
  {name: "LSID", uid: "LSID"},
  {name: "tarif1", uid: "tarif1"},
  {name: "tarif2", uid: "tarif2"},
  {name: "tarif3", uid: "tarif3"},
  {name: "tarif4", uid: "tarif4"},
  {name: "tarif5", uid: "tarif5"},
  {name: "tarif6", uid: "tarif6"},
  {name: "tarif7", uid: "tarif7"},
  {name: "tarif8", uid: "tarif8"},
  {name: "tarif9", uid: "tarif9"},
  {name: "tarif10", uid: "tarif10"},
  {name: "Coef_vente", uid: "Coef_vente"},
  {name: "prixventef", uid: "prixventef"},
  {name: "codeinterne", uid: "codeinterne"},
  {name: "origine", uid: "origine"},
  {name: "DLC", uid: "DLC"},
  {name: "POIDS", uid: "POIDS"},
  {name: "ref_smarq", uid: "ref_smarq"},
  {name: "txpromo", uid: "txpromo"},
  {name: "PAMPT", uid: "PAMPT"},
  {name: "pack", uid: "pack"},
  {name: "TPR", uid: "TPR"},
  {name: "VISIBILITE", uid: "VISIBILITE"},
  {name: "ESCOMPTE", uid: "ESCOMPTE"},
  {name: "NOTEDEBIT", uid: "NOTEDEBIT"},
  {name: "bloque", uid: "bloque"},
  {name: "CF1", uid: "CF1"},
  {name: "CF2", uid: "CF2"},
  {name: "CF3", uid: "CF3"},
  {name: "CF4", uid: "CF4"},
  {name: "CF5", uid: "CF5"},
  {name: "CF6", uid: "CF6"},
  {name: "CF7", uid: "CF7"},
  {name: "CF8", uid: "CF8"},
  {name: "CF9", uid: "CF9"},
  {name: "CF10", uid: "CF10"},
  {name: "serialise", uid: "serialise"},
  {name: "ref_ssfam", uid: "ref_ssfam"},
  {name: "stockarret", uid: "stockarret"},
  {name: "prixHT", uid: "prixHT"},
  {name: "valht", uid: "valht"},
  {name: "qtinv", uid: "qtinv"},
  {name: "valqtinv", uid: "valqtinv"},
  {name: "stockinv", uid: "stockinv"},
  {name: "valstockinv", uid: "valstockinv"},
  {name: "E01", uid: "E01"},
  {name: "E02", uid: "E02"},
  {name: "E03", uid: "E03"},
  {name: "UVC", uid: "UVC"},
  {name: "REF_SRAY", uid: "REF_SRAY"},
  {name: "REF_DEVISE", uid: "REF_DEVISE"},
  {name: "TAUXDECHANGE", uid: "TAUXDECHANGE"},
  {name: "nbcolis", uid: "nbcolis"},
  {name: "menue", uid: "menue"},
  {name: "TVA2", uid: "TVA2"},
  {name: "cout", uid: "cout"},
  {name: "qtelimitecaisse", uid: "qtelimitecaisse"},
  {name: "pahtpromofrs", uid: "pahtpromofrs"},
  {name: "pattcpromofrs", uid: "pattcpromofrs"},
  {name: "datedebpromfrs", uid: "datedebpromfrs"},
  {name: "datefinpromfrs", uid: "datefinpromfrs"},
  {name: "pvhtpromocaiss", uid: "pvhtpromocaiss"},
  {name: "pvttcpromocaiss", uid: "pvttcpromocaiss"},
  {name: "datedebpromvte", uid: "datedebpromvte"},
  {name: "datefinpromvte", uid: "datefinpromvte"},
  {name: "tmargepromo", uid: "tmargepromo"},
  {name: "tmarqpromo", uid: "tmarqpromo"},
  {name: "cout1", uid: "cout1"},
  {name: "cout2", uid: "cout2"},
  {name: "cout3", uid: "cout3"},
  {name: "SYNC", uid: "sync"},
  {name: "ACTIONS", uid: "actions"},
];

const statusOptions = [
  {name: "Active", uid: "active"},
  {name: "Paused", uid: "paused"},
  {name: "Vacation", uid: "vacation"},
];


export {columns, statusOptions};
