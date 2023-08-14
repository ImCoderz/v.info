import React from 'react'
import FormClient from '@/app/components/client/FormClient';
import axios from "../../../../axios"

const getClient=async(id)=>{
    console.log(id+"mmmmmm");
    const res =await axios.get(`/client/${id}`)
    return res?.data
}

const page = async({params:{code}}) => {
  
  const clientData=getClient(code)
  const clienta=await clientData
  const client=clienta[0]

  return (
    <div className=" mt-10 justify-center items-center flex flex-col gap-6">
      <div className='md:w-[72%] w-[95%]'>
        <FormClient client={client} disabled={true}/>
      </div>
    </div>
  )
}

export default page