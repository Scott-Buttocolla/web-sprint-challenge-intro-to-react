// Write your Character component here
// imported react and styled library
import React from "react";
import styled from 'styled-components';

const StyledCharacters = styled.div`
    padding:2%;
    display: inline-block;
    border: 3px solid black;
    margin:1%;

    width: 25%;

    h2{
        text-transform: uppercase;
        font-size:1.5rem;

    }

    p{
        font-weight:bold;
        font-size:1rem;
    }

    &:hover {
        border-radius:25%;
        opacity: 100%;
        color: ${(pr) => pr.theme.white};
        background: ${(pr) => pr.theme.black};;
        transition: all 0.8s ease-in-out;
    }
    transition: all 0.8s ease-in-out;
    // above is for when leaving the object
    div p{
        letter-spacing:1.1px;
    }
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