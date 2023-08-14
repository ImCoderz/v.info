import React from 'react'
import Table from "../components/fournisseur/Table"
import TableFournisseur from "../components/fournisseur/TableFournisseur"
 

const page = () => {
 
  return (
    <div className=" mt-10 justify-center items-center flex">
      <div className='md:w-[72%] w-[90%]'>
       <TableFournisseur/>
       {/* <Table/> */}
      </div>
    </div>
  )
}

export default page