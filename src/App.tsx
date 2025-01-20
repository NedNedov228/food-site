import { useState } from 'react'
import { Header } from './components/Header/Header'
import './App.css'
import { Carousel } from './components/Carousel/Carousel'
import { DishInfo } from './components/DishInfo/DishInfo'

function App() {

  return (
    <>
    <body>
      <Header/>
      <div className="content">
        <DishInfo/>
        <Carousel/>
      </div>
    </body>
      
    </>
  )
}

export default App
