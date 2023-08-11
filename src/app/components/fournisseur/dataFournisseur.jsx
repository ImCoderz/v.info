"use client"
import React,{useEffect,useState} from "react";




const columns = [
  {name: "ID", uid: "CODE_FRS", sortable: true},
  {name: "NAME", uid: "FOURNISSEUR", sortable: true},
  {name: "TEL", uid: "TEL", sortable: true},
  {name: "FAX", uid: "FAX", sortable: true},
  {name: "GSM", uid: "GSM"},
  {name: "EMAIL", uid: "E_MAIL"},
  {name: "VILLE", uid: "VILLE", sortable: true},
  {name: "PAYS", uid: "PAYS"},
  {name: "CP", uid: "CP"},
  {name: "ADRESSE1", uid: "ADRESSE1"},
  {name: "ADRESSE2", uid: "ADRESSE2"},
  {name: "BLOCAGE", uid: "BLOCAGE"},
  {name: "COMMENTAIRE", uid: "COMMENTAIRE"},
  {name: "APARTIRDE", uid: "APARTIRDE"},
  {name: "ECHEANCE", uid: "ECHEANCE"},
  {name: "REF_DEVISE", uid: "REF_DEVISE"},
  {name: "OBJECTIF", uid: "OBJECTIF"},
  {name: "Site", uid: "Site"},
  {name: "REF_MODEPAIE", uid: "REF_MODEPAIE"},
  {name: "MOBILE", uid: "mobile"},
  {name: "PATENTE", uid: "patente"},
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
