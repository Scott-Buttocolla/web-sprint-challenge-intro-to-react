// Write your Character component here
// imported react and styled library
import React from "react";
import styled from 'styled-components';



// created Character per readMe and defined props as map and passing it the dataform App.js
const Character = (props) => {
    const {data} = props
    return (
        <div>
            <h2>{data.name}</h2>
            <p>Height: {data.height}</p>
            <p>Weight: {data.mass}</p>
            <p>Eye color: {data.eye_color}</p>
            <p>Skin color: {data.skin_color}</p>
            <p>Hair color: {data.hair_color}</p>
            <p>Gender: {data.gender}</p>
            <p>Birth year: {data.birth_year}</p>  
        </div>
    )
}

export default Character