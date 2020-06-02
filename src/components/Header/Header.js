import React from 'react'
import styled from 'styled-components'

const HeaderStyled = styled.header`
position: relative;
height: 4rem;
width: 100vw;
background-color: white;
box-shadow: 0px 1px 5px grey;
`

const Logo = styled.p`
position: absolute;
top: 50%;
left: 2rem;
transform: translateY(-50%);
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
