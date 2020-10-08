import styled from 'styled-components'

export const HeaderStyled = styled.header`
display: flex;
align-items: center;
height: 4rem;
width: 100vw;
background-color: white;
box-shadow: 0px 1px 5px grey;
padding-left: 2rem;

@media (max-width: 500px) {
    padding-left: 0;
    justify-content: center;
}
`

export const Logo = styled.div`
font-size: x-large;
font-weight: 500;
`