import React from 'react'
import { FaCircleNotch } from 'react-icons/fa'
import styled from 'styled-components'

import styles from './Spinner.module.scss'

const SpinnerStyled = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100px;
width: 500px;
margin-bottom: 3rem;
`

const Spinner = () => {
    return (
        <SpinnerStyled>
            <div className={styles.spinner}>
                <FaCircleNotch size={'4rem'} />
            </div>
        </SpinnerStyled>
    )
}

export default Spinner
