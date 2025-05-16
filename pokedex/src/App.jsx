import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { SideNav } from './components/SideNav'
import { PokeCard } from './components/PokeCard'
import { Header } from './components/header'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <SideNav />
      <PokeCard />

    </div>
  )
}

export default App
