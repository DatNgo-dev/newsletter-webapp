// import { useState } from 'react'
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Footer from "./components/Footer"


function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <Header/>
      <Footer/>
    </div>
  )
}

export default App
