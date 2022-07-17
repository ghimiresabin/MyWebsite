import React from "react"
import About from "./About"
import Fotter from "./Fotter"
import MainBanner from "./MainBanner"
import NavBar from "./NavBar"
import './style.css'

const App =() =>{
    return(
    <div>
        <NavBar/>
        <MainBanner/>
        <About/>
        <Fotter/>
    </div>
    )
}
export default App