import React from 'react'
import FormArticle from '@/app/components/article/FormArticle';

const page = () => {
    
  return (
    <div className=" mt-10 justify-center items-center flex flex-col gap-6">
      <div className='md:w-[72%] w-[95%]'>
        <FormArticle/>
      </div>
    </div>
  )
}

export default page