import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Slider from './Components/Slider'
import GlobalApi from './Services/GlobalApi'

function App() {
  
  const [count, setCount] = useState([])
  
  return (
    <>
      <Header/>

      <Slider/>
    </>
  )
}

export default App
