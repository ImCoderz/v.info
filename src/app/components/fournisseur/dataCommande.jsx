"use client"


const columns = [
  {name: "Num", uid: "REF_BC", sortable: true},
  {name: "Entropot", uid: "ENTROPOT", sortable: true},
  {name: "Fournisseur", uid: "FOURNISSEUR", sortable: true},
  {name: "Date", uid: "DATE_BC", sortable: true},
  {name: "Montant HT", uid: "MNT_HT"},
  {name: "Montant TTC", uid: "MNT_TTC"},
  {name: "ACTIONS", uid: "actions"},
];

const statusOptions = [
  {name: "Active", uid: "active"},
  {name: "Paused", uid: "paused"},
  {name: "Vacation", uid: "vacation"},
];


export {columns, statusOptions};
