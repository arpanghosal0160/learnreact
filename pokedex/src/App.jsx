import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { SideNav } from './components/SideNav'
import { PokeCard } from './components/PokeCard'
import { Header } from './components/header'

//we needthe user to search for an pokemon so that we can find the details. So we need to define the states in the App.jsx file





function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(0) //we initialize the hook at the index 0, ie. bulbasaur


  return (
    <div>
      <Header />
      <SideNav selectedPokemon={selectedPokemon} setSelectedPokemon={setSelectedPokemon}/>
      <PokeCard selectedPokemon={selectedPokemon}/>

    </div>
  )
}

export default App
