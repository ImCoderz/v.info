import React from 'react'
import EditFournisseur from '@/app/components/utils/EditFournisseur';
import axios from "axios"

const getFournisseur=async(id)=>{
    console.log(id+"mmmmmm");
    const res =await axios.get(`http://localhost:8000/fournisseurs/${id}`)
    return res?.data.fournisseur
}

const page = async({params:{code}}) => {
  
  const fournisseurData=getFournisseur(code)
  const fournisseura=await fournisseurData
  const fournisseur=fournisseura[0]

  return (
    <div className=" mt-10 justify-center items-center flex flex-col gap-6">
      <div className='w-[72%]'>
        <EditFournisseur fournisseur={fournisseur} disabled={true}/>
      </div>
    </div>
  )
}

export default page