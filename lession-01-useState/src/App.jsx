import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header'
import Home from './component/Home'
import Footer from './component/Footer'

function App() {

  return (
    <>
      <Header/>
      <Home/>
      <Footer/>
    </>
  )
}

export default App
