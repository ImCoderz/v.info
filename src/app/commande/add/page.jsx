"use client"
import React from 'react'
import TableListArticle from "../../components/fournisseur/TableListArticle"
import TableChooseArticle from "../../components/fournisseur/TableChooseArticle"
import Select from "react-select";
import FormCommande from '@/app/components/commande/FormCommande';


const page = () => {
  // const [choosen, setChoosen] = React.useState(new Set([]));
  // const [selectedOptions, setSelectedOptions] = React.useState();
  // const optionList = [
  //   { value: "red", label: "red" },
  //   { value: "green", label: "Green" },
  //   { value: "yellow", label: "Yellow" },
  //   { value: "blue", label: "Blue" },
  //   { value: "white", label: "White" }
  // ];

  // // Function triggered on selection
  // function handleSelect(data) {
  //   setSelectedOptions(data);
  // }


  return (
    <div className=" mt-10 justify-center items-center flex">
      <div className='w-[72%]'>
       {/* <TableChooseArticle choosen={choosen} setChoosen={setChoosen} /> */}
       <TableListArticle/>
      </div>
    </div>
  )
}

export default page