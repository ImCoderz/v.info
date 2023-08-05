"use client"
import React,{useRef,useState} from 'react'
import {Avatar} from "@nextui-org/react";
import {Input} from "@nextui-org/react";
import {signIn }from "next-auth/react"
import {EyeFilledIcon} from "../../components/EyeFilledIcon";
import {EyeSlashFilledIcon} from "../../components/EyeSlashFilledIcon";
import {Button} from "@nextui-org/react";


const SignIn = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const submitLogin=async()=>{
    console.log(username)
    const result=await signIn("credentials",{
      username:username,
      password:password,
      redirect:true,
      callbackUrl:"/"
    })
    console.log(result);
  }
  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <div className='md:w-[400px] shadow-xl w-[300px] h-[400px] items-center justify-center flex flex-col gap-3 py-6 px-10'>
            <Avatar showFallback src='https://images.unsplash.com/broken' classNames={{
          base: "bg-[#0000ff]/20",
          icon: "text-[#0000ff]/80",
        }}  />
            <h3 className='font-bold text-xl'>Sign In</h3>
            <Input
              key={"outside"}
              type="text"
              label="Username"
              placeholder="Enter your Username"
              labelPlacement={"outside"}
              value={username}
              onValueChange={setUsername}
            />
           <Input
              label="Password"
              variant="bordered"
              placeholder="Enter your password"
              labelPlacement={"outside"}
              value={password}
              onValueChange={setPassword}
              endContent={
                <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                  {isVisible ? (
                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={isVisible ? "text" : "password"}
              className=""
            />
              <Button color="primary" className={`mt-3 w-full`} onClick={submitLogin}>
                Log In
              </Button>
        </div>
    </div>
  )
}

export default SignIn