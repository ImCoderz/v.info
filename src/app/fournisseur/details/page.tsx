import React from 'react'
import Wrapper from '@/app/components/utils/Wrapper';
import axios from "axios"

const page = async() => {
  const res =await axios.get("http://localhost:8000/fournisseurs/")
  const fournisseur=res?.data?.fournisseurs
  return (
    <div className=" mt-10 justify-center items-center flex flex-col gap-6">
      <h2>Details Fournisseur</h2>
      <div className='w-[72%]'>
        <Wrapper/>
      </div>
    </div>
  )
}

export default page