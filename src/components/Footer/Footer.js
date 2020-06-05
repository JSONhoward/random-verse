import React from 'react'
import styled from 'styled-components'
import { FaGithub } from 'react-icons/fa'

const FooterStyled = styled.header`
position: relative;
display: flex;
bottom: 0;
height: 4rem;
width: 100vw;
background-color: white;
box-shadow: 0px -1px 5px grey;
`

const FooterDivLeft= styled.div`
display: flex;
flex: 1;
align-items: center;
justify-content: center;
height: 100%;

@media (max-width: 500px) {
display: none;
}
`
const FooterDivMiddle = styled.div`
display: flex;
flex: 1;
align-items: center;
justify-content: center;
height: 100%;

@media (max-width: 500px) {

}
`
const FooterDivRight = styled.div`
display: flex;
flex: 1;
align-items: center;
justify-content: center;
height: 100%;

@media (max-width: 500px) {

}
`

const GithubLink = styled.a`
display: flex;
color: black;
text-decoration: none;
font-size: larger;
font-weight: bold;
p {
    margin-left: .5rem;
}

@media (max-width: 500px) {
font-size: medium;
}
`

const Footer = () => {
    return (
        <FooterStyled>
            <FooterDivLeft></FooterDivLeft>
            <FooterDivMiddle>&copy; 2020 Random Verse</FooterDivMiddle>
            <FooterDivRight>
                <GithubLink target="_blank" rel="noopener noreferrer" href='http://www.github.com/JSONhoward/random-verse'><FaGithub size={'2rem'} />
                </GithubLink>
                <GithubLink target="_blank" rel="noopener noreferrer" href='http://www.github.com/JSONhoward/random-verse'><p>Github Repo</p>
                </GithubLink>
            </FooterDivRight>
        </FooterStyled>
    )
}

export default Footer
