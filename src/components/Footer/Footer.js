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

const FooterDiv = styled.div`
display: flex;
flex: 1;
align-items: center;
justify-content: center;
height: 100%;
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
`

const Footer = () => {
    return (
        <FooterStyled>
            <FooterDiv></FooterDiv>
            <FooterDiv>&copy; 2020 Random-Verse</FooterDiv>
            <FooterDiv>
                <GithubLink target="_blank" rel="noopener noreferrer" href='http://www.github.com/JSONhoward/random-verse'><FaGithub size={'2rem'} />
                </GithubLink>
                <GithubLink target="_blank" rel="noopener noreferrer" href='http://www.github.com/JSONhoward/random-verse'><p>Github Repo</p>
                </GithubLink>
            </FooterDiv>
        </FooterStyled>
    )
}

export default Footer
