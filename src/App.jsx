import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cronometro from './Components/Cronometro'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Cronometro/>
    </>
  )
}

export default App
