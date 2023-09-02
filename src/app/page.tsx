import Navbar from './components/home/Navbartest'
import Navbar2 from './components/home/MyNavbar'
import {signOut,useSession,signIn} from "next-auth/react"
import MyNavbar from './components/home/MyNavbar'

export default function Home() {
  return (
    <div>
      <MyNavbar/>
    </div>
  )
}
