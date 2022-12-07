// import { useState } from 'react'
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Footer from "./components/Footer"


function App() {
  return (
    <div className="grid grid-cols-1 grid-rows-[7%_91%_2%] h-screen">
      <Navbar/>
      <Header/>
      <Footer/>
    </div>
  )
}

export default App
