//we need the data from the api in the pokecard. So we need to write the logic of the api fetching in this part of the component
import { useEffect, useState } from 'react'
import { getFullPokedexNumber, getPokedexNumber } from '../utils'

export function PokeCard(props){
    const {selectedPokemon} = props
    const [data, setData] = useState(null) //we need to define the state for the data that we are fetching from the api
    const [loading, setLoading] = useState(false)
     //we need to define the state for the loading that we are fetching from the api

    useEffect(() => { 

        //if loading, exit logic it means that the data is there in the cache and we don't need to re-fetch the data
        if (loading || !localStorage) { return }


        //check if the selectedPokemon is available in the cache
        //1. Define the cache
        let cache = {} //define the cache as an empty object because we get object as an output
        if (localStorage.getItem('pokedex')) {
            cache = JSON.parse(localStorage.getItem('pokedex')) //parse the data from the local storage
        }
        //2.Check if the swlwctedPokemon is in the cache, else fetch from the api
        if (selectedPokemon in cache) {
            //read from cache
            setData(cache[selectedPokemon]) //set the data to the cache
            return
        }

        async function fetchPokemonData() {
            try {
                const baseUrl = 'https://pokeapi.co/api/v2/'
                const suffix = 'pokemon/' + getPokedexNumber(selectedPokemon) //base url for the api
                const finalUrl = baseUrl + suffix //final url for the api
                const res = await fetch(finalUrl) //fetch the data from the api
                const pokemonData = await res.json() //convert the data to json
                setData(pokemonData) //set the data to the pokemon data

                cache[selectedPokemon] = pokemonData //set the cache to the pokemon data
                localStorage.setItem('pokedex',JSON.stringify(cache)) //set the cache to the local storage
            } catch (err) {
                console.log("Error fetching Pokémon data:", err)
            } finally {
                setLoading(false) //set the loading to false
            }
        }

        fetchPokemonData() //call the function to fetch the data from the api

        //3.If, we fetch from the api, make sure to save the info for the cache next time
    },[selectedPokemon])
    
    return(
        <div className='poke-card'>
            <div className='poke-card-header'>
                <h4>#{getFullPokedexNumber(selectedPokemon)}</h4>
                <h2></h2>
            </div>
        </div>
    )
}