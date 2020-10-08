import React from 'react'

import {DropdownStyled} from './styles'
import BookDropdown from '../BookDropdown/BookDropdown'
import ChapterDropdown from '../ChapterDropdown/ChapterDropdown'
import VerseDropdown from '../VerseDropdown/VerseDropdown'

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
