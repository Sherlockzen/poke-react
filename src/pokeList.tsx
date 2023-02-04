import React from "react";
import { useState, useEffect } from "react";

const getPokemons = (generation) => {
    const [list, setList] = useState([]);
    console.log(generation.gene)
    const link = 'https://pokeapi.co/api/v2/generation/'+generation.gene+'/'
    useEffect(() => {
        fetch(link)
            .then((response) => response.json())
            .then((data) => setList(data.pokemon_species)
            )
    }, []);

    return list;
}

function PokeList({ gene }) {
    return (
        <ol>
            {
                getPokemons({gene}).map(
                    (elem, index: number) =>
                        <li key={`${index}`}>
                            {elem.name}
                        </li>
                )
            }
        </ol>
    )
}
export default PokeList;