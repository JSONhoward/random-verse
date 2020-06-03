import React from 'react'

import style from './Dropdown.module.scss'
import BookDropdown from '../BookDropdown/BookDropdown'
import ChapterDropdown from '../ChapterDropdown/ChapterDropdown'
import VerseDropdown from '../VerseDropdown/VerseDropdown'

const Dropdown = () => {
 return (
        <div className={style.Dropdown}>
            <BookDropdown />
            <ChapterDropdown />
            <VerseDropdown />
        </div>
    )
}

export default Dropdown
