import React from "react";
import { useState, useEffect } from "react";

interface genera {
    gene: string
}

const getPokemons = (generation: genera) => {
    const [list, setList] = useState([]);
    // console.log(list)
    const link = 'https://pokeapi.co/api/v2/generation/'+generation.gene+'/'
    useEffect(() => {
        fetch(link)
            .then((response) => response.json())
            .then((data) => setList(data.pokemon_species)
            )
    }, [generation.gene]);

    return list;
}

function PokeList(gene: genera) {
    return (
        <ol>
            {
                getPokemons(gene).map(
                    (elem: {name:string}, index: number) =>
                        <li key={`${index}`}>
                            {elem.name}
                        </li>
                )
            }
        </ol>
    )
}
export default PokeList;