import React from 'react'
import { FaCircleNotch } from 'react-icons/fa'

import { SpinnerStyled, SpinnerShape } from './styles'

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
