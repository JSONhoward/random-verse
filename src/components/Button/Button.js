import React from 'react'

import {ButtonDiv} from './styles'

const Button = ({fetch}) => {
    return (
        <ButtonDiv onKeyDown={e => e.key === 'Enter' ? fetch : null} onClick={fetch}>
            Get Verse
        </ButtonDiv>
    )
}

export default Button
