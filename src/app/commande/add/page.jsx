"use client"
import React from 'react'
import TableListArticle from "../../components/fournisseur/TableListArticle"
import TableChooseArticle from "../../components/fournisseur/TableChooseArticle"

const page = () => {
  const [choosen, setChoosen] = React.useState(new Set([]));

  return (
    <div className=" mt-10 justify-center items-center flex">
      <div className='w-[72%]'>
       <TableChooseArticle choosen={choosen} setChoosen={setChoosen} />
       <TableListArticle choosen={choosen} setChoosen={setChoosen}/>
      </div>
    </div>
  )
}

export default page