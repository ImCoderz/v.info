import React from 'react'
import FormArticle from '@/app/components/article/FormArticle';
import axios from "../../../../axios"

const getArticle=async(id)=>{
    console.log(id+"mmmmmm");
    const res =await axios.get(`/article/${id}`)
    return res?.data
}

const page = async({params:{code}}) => {
  
  const articleData=getArticle(code)
  const articlea=await articleData
  const article=articlea[0]

  return (
    <div className=" mt-10 justify-center items-center flex flex-col gap-6">
      <div className='md:w-[72%] w-[95%]'>
        <FormArticle article={article} disabled={true}/>
      </div>
    </div>
  )
}

export default page