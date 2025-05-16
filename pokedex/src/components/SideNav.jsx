import { first151Pokemon, getFullPokedexNumber } from "../utils"

export function SideNav() {
    return(
        //we are building a nav bar in the app, the function basically loops over all the 151 pokemon that is given in the utils file and the makes a button
        //for each pokemon. The {getFullPokedexNumber(pokemonIndex)} is used to return the index of the pokemon and the 
        //{pokemon} in the next line is used to render the name of the pokemon according to the pokedex
        <nav>
            {first151Pokemon.map((pokemon, pokemonIndex) => (
                <button key={pokemonIndex}>
                    <p>{getFullPokedexNumber(pokemonIndex)}</p>
                    <p>{pokemon}</p>
                </button>
            ))}
        </nav>
    )
        
    
}