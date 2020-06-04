import React from 'react'
import { FaCircleNotch } from 'react-icons/fa'
import styled, { keyframes } from 'styled-components'

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

const SpinnerStyled = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100px;
width: 500px;
margin-bottom: 3rem;
`

const SpinnerShape = styled.div`
animation: ${spin} 2s linear infinite forwards;
`

const Spinner = () => {
    return (
        <SpinnerStyled>
            <SpinnerShape>
                <FaCircleNotch size={'4rem'} />
            </SpinnerShape>
        </SpinnerStyled>
    )
}

export default Spinner
