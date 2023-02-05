import React from 'react'
import { useState, useEffect } from "react";

interface generation {
    name: string,
    url: string;
}

const getReg = () => {
    const [value, setValue] = useState([])
    const link = 'https://pokeapi.co/api/v2/generation/'
    useEffect(() => {
        fetch(link)
            .then((response) => response.json())
            .then((data) => setValue(data.results)
        )
    }, []);
    return value;
}

function Regions(): JSX.Element[] {

    return (
        getReg().map(
            (elem: {name: string; url: string}, index: number) =>
                <option key={`${index}`}>
                    {elem.name}
                </option>))
}
export default Regions;