// Write your Character component here
// imported react and styled library
import React from "react";
import styled from 'styled-components';

const StyledCharacters = styled.div`
    /* display:flex; */
    /* justify-items: center;
    align-content:center;
    justify-content:space-between; */
    /* border: 3px solid black;
    width: 30%;
 */ */






`
// back tic above




// created Character per readMe and defined props as map and passing it the dataform App.js
const Character = (props) => {
    const {data} = props
    return (
        <StyledCharacters>
            <h2>{data.name}</h2>
            <div>
            <p>Height: {data.height}</p>
            <p>Weight: {data.mass}</p>
            <p>Eye color: {data.eye_color}</p>
            <p>Skin color: {data.skin_color}</p>
            <p>Hair color: {data.hair_color}</p>
            <p>Gender: {data.gender}</p>
            <p>Birth year: {data.birth_year}</p>
            </div> 
        </StyledCharacters>
    )
}

export default Character