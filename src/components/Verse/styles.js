import styled from 'styled-components'

export const VerseStyled = styled.div`
position: relative;
display: flex;
justify-content: center;
font-size: 1rem;
min-height: 100px;
width: 500px;
margin-bottom: 3rem;
padding: 2rem 1rem;
font-style: italic;
text-shadow: 1px 1px 1px white;

@media (max-width: 500px) {
    width: 300px;
    font-size: .75rem;
}
`

export const VerseInfo = styled.div`
position: absolute;
top: 0;
left: 5px;
font-weight: bold;
`

export const VerseContent = styled.div`
font-size: 1.5rem;

@media (max-width: 500px) {
    font-size: 1rem;
}
`