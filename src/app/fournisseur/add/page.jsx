import React from 'react'
import EditFournisseur from '@/app/components/utils/EditFournisseur';


 const page = () => {
  return (
    <div className=" mt-10 justify-center items-center flex flex-col gap-6">
      <div className='md:w-[72%] w-[95%]'>
        <EditFournisseur title={"Add"} />
      </div>
    </div>
  )
}
export default page