import { useEffect, useState } from "react"
import PokemonCard from "./PokemonCard"
import "./PokeList.css"



function Pokelist () {

    const [allPokemons, setAllPokemons] = useState([])

    const getAllPokemons = async () => {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0");
        const data = await res.json()

        function createPokemonObject(results) {
            results.forEach(async (pokemon) => {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                const data = await res.json()

                setAllPokemons((currentList) => [...currentList, data])
                await allPokemons.sort((a,b) => a.id - b.id)
                
        })
    }
        createPokemonObject(data.results);
}

    useEffect(()=>{
        getAllPokemons()
    }, [])   

    return(
        <div className="app-container">
                <div className="all-container">
                    {allPokemons.map((pokemonStats ) => ( //{allPokemons.sort((a,b) => a.id - b.id).map((pokemonStats ) => (
                        <PokemonCard
                            key={pokemonStats.name}
                            id={pokemonStats.id.toString().padStart(3, "0")}
                            //image={pokemonStats.sprites.other["official-artwork"].front_default}
                            image={pokemonStats.sprites.other.home.front_default}
                            name={pokemonStats.name.replace(/^./, (str) => str.toUpperCase())}
                            type={pokemonStats.types.map((m) => m.type.name)}
                            weight={pokemonStats.weight}
                            height={pokemonStats.height}
                            stats={pokemonStats.stats.map((stats) => stats.base_stat).slice(0,3)}
                            statsName={pokemonStats.stats.map((stat)=>stat.stat.name).slice(0,3)} />
                    ))}
                </div>
        </div>
    )
}

export default Pokelist