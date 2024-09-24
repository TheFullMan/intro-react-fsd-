import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SecondComponent from './SecondComponent'
import User from './User'

function App() {

  const user = {
    name : "John",
    lastName : "Wick",
    image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVRW5fkgsXXTqOBO_olteG5dxjnVQTq1CY2g&s'
  }

  return (
    <>
    <User {...user}/> 
    </>
  )
}

export default App
