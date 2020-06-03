import React from 'react'
import styled from 'styled-components'
import {FaGithub} from 'react-icons/fa'

import styles from './Footer.module.scss'

const FooterStyled = styled.header`
position: absolute;
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

const Footer = () => {
    return (
        <FooterStyled>
        <FooterDiv></FooterDiv>
        <FooterDiv>&copy; 2020 Random-Verse</FooterDiv>
        <FooterDiv>
        <a className={styles.github} target="_blank" rel="noopener noreferrer" href='http://www.github.com/JSONhoward/random-verse'><FaGithub size={'2rem'}/></a>
        <a className={styles.github} target="_blank" rel="noopener noreferrer" href='http://www.github.com/JSONhoward/random-verse'><p>Github Repo</p></a>
        </FooterDiv>
        </FooterStyled>
    )
}

export default Footer
