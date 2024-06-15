import { useState } from 'react'
import { NavBar } from './components/Navbar'
import { MainEl } from './components/MainEl'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar />
     <MainEl />
    </>
  )
}

