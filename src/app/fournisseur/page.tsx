import React from 'react'
import Table from "../components/fournisseur/Table"
import TableFournisseur from "../components/fournisseur/TableFournisseur"
 

const page = () => {
 
  return (
    <div className=" mt-10 justify-center items-center flex">
      <div className='w-[72%]'>
       <TableFournisseur/>
       {/* <Table/> */}
      </div>
    </div>
  )
}

export default page