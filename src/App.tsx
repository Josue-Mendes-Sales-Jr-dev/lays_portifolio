import { Navbar1 } from "../src/components/navbar"
import {Outlet} from "react-router-dom"


function App() {
  return (
    <>
     <Navbar1/>
     <Outlet/>
    </>
  )
}

export default App
