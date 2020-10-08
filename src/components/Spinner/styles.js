import styled, {keyframes} from 'styled-components'

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    50%{
        transform: rotate(180deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

export const SpinnerStyled = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100px;
width: 500px;
margin-bottom: 3rem;
`

export const SpinnerShape = styled.div`
animation: ${spin} 2s linear infinite forwards;
`