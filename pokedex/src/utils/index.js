

export const first151Pokemon = [
    "Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise",
    "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot",
    "Rattata", "Raticate", "Spearow", "Fearow", "Ekans", "Arbok", "Pikachu", "Raichu", "Sandshrew", "Sandslash",
    "Nidoran♀", "Nidorina", "Nidoqueen", "Nidoran♂", "Nidorino", "Nidoking", "Clefairy", "Clefable", "Vulpix",
    "Ninetales", "Jigglypuff", "Wigglytuff", "Zubat", "Golbat", "Oddish", "Gloom", "Vileplume", "Paras", "Parasect",
    "Venonat", "Venomoth", "Diglett", "Dugtrio", "Meowth", "Persian", "Psyduck", "Golduck", "Mankey", "Primeape",
    "Growlithe", "Arcanine", "Poliwag", "Poliwhirl", "Poliwrath", "Abra", "Kadabra", "Alakazam", "Machop", "Machoke",
    "Machamp", "Bellsprout", "Weepinbell", "Victreebel", "Tentacool", "Tentacruel", "Geodude", "Graveler", "Golem",
    "Ponyta", "Rapidash", "Slowpoke", "Slowbro", "Magnemite", "Magneton", "Farfetch'd", "Doduo", "Dodrio",
    "Seel", "Dewgong", "Grimer", "Muk", "Shellder", "Cloyster", "Gastly", "Haunter", "Gengar", "Onix", "Drowzee",
    "Hypno", "Krabby", "Kingler", "Voltorb", "Electrode", "Exeggcute", "Exeggutor", "Cubone", "Marowak", "Hitmonlee",
    "Hitmonchan", "Lickitung", "Koffing", "Weezing", "Rhyhorn", "Rhydon", "Chansey", "Tangela", "Kangaskhan",
    "Horsea", "Seadra", "Goldeen", "Seaking", "Staryu", "Starmie", "Mr. Mime", "Scyther", "Jynx", "Electabuzz",
    "Magmar", "Pinsir", "Tauros", "Magikarp", "Gyarados", "Lapras", "Ditto", "Eevee", "Vaporeon", "Jolteon",
    "Flareon", "Porygon", "Omanyte", "Omastar", "Kabuto", "Kabutops", "Aerodactyl", "Snorlax", "Articuno",
    "Zapdos", "Moltres", "Dratini", "Dragonair", "Dragonite", "Mewtwo", "Mew"
]

//the colour specification for different types of pokemon
export const pokemonTypeColors = {
    normal: {
        color: "#6C6C6C",
        background: "#A8A77A"
    },
    fire: {
        color: "#FFFFFF",
        background: "#EE8130"
    },
    water: {
        color: "#FFFFFF",
        background: "#6390F0"
    },
    electric: {
        color: "#000000",
        background: "#F7D02C"
    },
    grass: {
        color: "#FFFFFF",
        background: "#7AC74C"
    },
    ice: {
        color: "#000000",
        background: "#96D9D6"
    },
    fighting: {
        color: "#FFFFFF",
        background: "#C22E28"
    },
    poison: {
        color: "#FFFFFF",
        background: "#A33EA1"
    },
    ground: {
        color: "#FFFFFF",
        background: "#E2BF65"
    },
    flying: {
        color: "#000000",
        background: "#A98FF3"
    },
    psychic: {
        color: "#FFFFFF",
        background: "#F95587"
    },
    bug: {
        color: "#000000",
        background: "#A6B91A"
    },
    rock: {
        color: "#FFFFFF",
        background: "#B6A136"
    },
    ghost: {
        color: "#FFFFFF",
        background: "#735797"
    },
    dragon: {
        color: "#FFFFFF",
        background: "#6F35FC"
    },
    dark: {
        color: "#FFFFFF",
        background: "#705746"
    },
    steel: {
        color: "#000000",
        background: "#B7B7CE"
    },
    fairy: {
        color: "#000000",
        background: "#D685AD"
    }
}

//to get the pokemon number from the pokedex. JS is a zero-index program, so we need +1 to get the actual number
export function getPokedexNumber(index) {
    return index + 1
}

//to get the full pokedex number. The pokedex number is a 3 digit number, so we need to add 0s in front of it
// for example, 1 becomes 001, 10 becomes 010, 100 becomes 100
export function getFullPokedexNumber(index) {
    return `${index + 1 > 99 ? index + 1 : index + 1 > 9 ? `0${index + 1}` : `00${index + 1}`}`
}