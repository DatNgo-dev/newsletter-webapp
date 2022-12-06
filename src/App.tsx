// import { useState } from 'react'
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Footer from "./components/Footer"


function App() {
  return (
    <div className="flex flex-col h-screen overflow-y-scroll">
      <Navbar/>
      <Header/>
      <Footer/>
    </div>
  )
}

export default App
