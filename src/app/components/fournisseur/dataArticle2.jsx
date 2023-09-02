"use client"
import React,{useEffect,useState} from "react";




const columns = [
  {name: "REF_ART", uid: "REF_ART", sortable: true},
  {name: "ARTICLE", uid: "ARTICLE"},
  {name: "STOCK", uid: "STOCKG"},
  {name: "MODELE", uid: "MODELE"},
  {name: "TAILLE", uid: "TAILLE"},
  {name: "COULEUR", uid: "COULEUR"},
  {name: "PA_HT", uid: "PA_HT"},
  {name: "PA_TTC", uid: "PA_TTC"},
  {name: "PV_HT", uid: "PV_HT"},
  {name: "PV_TTC", uid: "PV_TTC"},
];

const statusOptions = [
  {name: "Active", uid: "active"},
  {name: "Paused", uid: "paused"},
  {name: "Vacation", uid: "vacation"},
];


export {columns, statusOptions};
