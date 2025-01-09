import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Content/>
    <Footer/>
    <Comp1 />
    <Comp2 />
    <Comp3 />
    <Comp4 />
    <Comp5 />
    </>
  )
}

export default App
