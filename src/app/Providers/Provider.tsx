"use client"
import React from 'react'
import {SessionProvider} from "next-auth/react"
import {NextUIProvider} from '@nextui-org/react'
import MyNavbar from '../components/home/MyNavbar'

interface Props{
    children?:React.ReactNode
}
const Provider = ({children}:Props) => {
  return (
    <SessionProvider>
      <NextUIProvider>
        {children}
      </NextUIProvider>
    </SessionProvider>
  )
}

export default Provider