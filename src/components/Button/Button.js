import React from 'react'
import styled from 'styled-components'

const ButtonDiv = styled.button`
height: 4rem;
width: 6rem;
margin-left: 2rem;
background-color: whitesmoke;
border-color: whitesmoke;
border-radius: .5rem;
box-shadow: 1px 1px 5px black;
font-size: 1rem;
`

const Button = props => {
    return (
        <ButtonDiv onKeyDown={e => e.key === 'Enter' ? props.fetch : null} onClick={props.fetch}>
            Get Verse
        </ButtonDiv>
    )
}

export default Button