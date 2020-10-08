import styled from 'styled-components'

export const FooterStyled = styled.header`
position: relative;
display: flex;
bottom: 0px;
height: 4rem;
width: 100vw;
background-color: white;
box-shadow: 0px -1px 5px grey;
`

export const FooterDivLeft= styled.div`
display: flex;
flex: 1;
align-items: center;
justify-content: center;
height: 100%;

@media (max-width: 500px) {
display: none;
}
`
export const FooterDivMiddle = styled.div`
display: flex;
flex: 1;
align-items: center;
justify-content: center;
height: 100%;

@media (max-width: 500px) {
font-size: .75rem;
}
`
export const FooterDivRight = styled.div`
display: flex;
flex: 1;
align-items: center;
justify-content: center;
height: 100%;
`

export const GithubLink = styled.a`
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