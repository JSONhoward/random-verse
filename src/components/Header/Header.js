import React from 'react'
import styled from 'styled-components'

const HeaderStyled = styled.header`
display: flex;
align-items: center;
height: 4rem;
width: 100vw;
background-color: white;
box-shadow: 0px 1px 5px grey;
padding-left: 2rem;
`

const Logo = styled.div`
font-size: x-large;
font-weight: 500;
`

const Header = () => {
    return (
        <HeaderStyled>
            <Logo>Random-Verse</Logo>
        </HeaderStyled>
    )
}

export default Header
