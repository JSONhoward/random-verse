import React from 'react'
import { FaGithub } from 'react-icons/fa'

import { FooterStyled, FooterDivLeft, FooterDivMiddle, FooterDivRight, GithubLink } from './styles'

export const GITHUBLINK = 'http://www.github.com/JSONhoward/random-verse'

const Footer = () => {
    return (
        <FooterStyled>
            <FooterDivLeft></FooterDivLeft>
            <FooterDivMiddle>&copy; {new Date().getFullYear()} Random Verse</FooterDivMiddle>
            <FooterDivRight>
                <GithubLink target="_blank" rel="noopener noreferrer" href={GITHUBLINK}><FaGithub size={'2rem'} />
                </GithubLink>
                <GithubLink data-testid='githubLink' target="_blank" rel="noopener noreferrer" href={GITHUBLINK}><p>Github Repo</p>
                </GithubLink>
            </FooterDivRight>
        </FooterStyled>
    )
}

export default Footer
