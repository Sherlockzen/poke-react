import React from 'react'
import { useState, useEffect } from "react";

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

function Regions() {

    return (
        // <label>
        //     Escolha uma das regiões:
            // <select name="selectedRegion">

                    getReg().map(
                        (elem, index: number) =>
                            <option key={`${index}`} name={elem.name}>
                                {elem.name}
                            </option>))

        {/*    </select>*/}
        {/*</label>*/}

}
export default React.memo(Regions);