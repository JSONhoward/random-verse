import React from 'react'
import styled from 'styled-components'

import BookDropdown from '../BookDropdown/BookDropdown'
import ChapterDropdown from '../ChapterDropdown/ChapterDropdown'
import VerseDropdown from '../VerseDropdown/VerseDropdown'

const DropdownStyled = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`

const Dropdown = () => {
    return (
        <DropdownStyled>
            <BookDropdown />
            <ChapterDropdown />
            <VerseDropdown />
        </DropdownStyled>
    )
}

export default Dropdown
