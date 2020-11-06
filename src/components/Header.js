import React from "react";
import styled from 'styled-components';


const StyledHeader = styled.div`
.logo {
    display:flex;
    justify-content:center;
    align-content:center;
}
img{
    margin:0% 3%;
}
h1{
    margin-top:5%;
    text-transform:uppercase;
    font-size:5rem;
}
h2{
    font-size:3rem;
    text-transform:uppercase;
}
`
//back tic above
export default function Header(props) {
    return (
        <StyledHeader>
            <div className = 'logo'>
                <img
                src = "https://w7.pngwing.com/pngs/866/888/png-transparent-galactic-civil-war-rebel-alliance-logo-star-wars-galactic-empire-star-wars-alliance-symbol-star-wars-rebels-thumbnail.png"
                alt = "The rebels will always prevail"
                />
                <img 
                src = "https://e7.pngegg.com/pngimages/441/131/png-clipart-yoda-star-wars-logo-star-wars-text-star-wars-episode-vii-thumbnail.png"
                alt = "Star Wars logo"
                />
                <img
                src = "https://i.pinimg.com/474x/1c/e7/05/1ce705942c3a249c97bf23d4c89148f4.jpg"
                alt = "The empire did nothing wrong"
                />
            </div>
            <div>
                <h1>Star Wars</h1> 
                    <h2>Characters</h2>
            </div>
        </StyledHeader>

    )

}