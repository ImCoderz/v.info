"use client"
import React,{useEffect,useState} from "react";




const columns = [
  {name: "REF_ART", uid: "REF_ART", sortable: true},
  {name: "REF_RAY", uid: "REF_RAY", sortable: true},
  {name: "REF_FAM", uid: "REF_FAM", sortable: true},
  {name: "REF_SFAM", uid: "REF_SFAM", sortable: true},
  {name: "ARTICLE", uid: "ARTICLE"},
  {name: "DATECREAT", uid: "DATECREAT"},
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
  {name: "STOCKG", uid: "STOCKG"},
  {name: "IDENTIF", uid: "identif"},
  {name: "COMPTE_COMPT", uid: "compte_compt"},
  {name: "LIVRSANSBC", uid: "livrsansbc"},
  {name: "RFA", uid: "RFA"},
  {name: "DELAILIVRAISON", uid: "delailivraison"},
  {name: "FOURNISSIEGE", uid: "fournissiege"},
  {name: "DELAISLIV", uid: "delaisliv"},
  {name: "E01", uid: "E01"},
  {name: "E02", uid: "E02"},
  {name: "E03", uid: "E03"},
  {name: "SYNC", uid: "sync"},
  {name: "ACTIONS", uid: "actions"},
];

const statusOptions = [
  {name: "Active", uid: "active"},
  {name: "Paused", uid: "paused"},
  {name: "Vacation", uid: "vacation"},
];


export {columns, statusOptions};
