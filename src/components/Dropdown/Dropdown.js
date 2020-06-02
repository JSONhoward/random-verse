import React from 'react'

import style from './Dropdown.module.scss'
import DropdownBox from './DropdownBox/DropdownBox'
import { BIBLE } from '../../utils/bible'

const Dropdown = ({ 
    toggleBook,
    toggleChapter,
    toggleVerse,
    bookOptions,
    chapterOptions,
    verseOptions,
    book,
    chapter,
    verse,
    handleBookChoice,
    handleChapterChoice,
    handleVerseChoice
}) => {

    const chapterList = book !== "(Random)" ? BIBLE.filter(el => {
        return el.name === book
    }).map(el => el.chapters).flat(1) : []

    const verseList = chapter !== "(Random)"  ? [...Array(chapterList[chapter - 1]).keys()].map(el => el + 1) : []

    return (
        <div className={style.Dropdown}>
            <DropdownBox
                choice={handleBookChoice}
                text={book}
                list={BIBLE}
                isOpen={bookOptions}
                toggleOpen={toggleBook}
                type={'book'}
                left={true}
            />
            <DropdownBox
                choice={handleChapterChoice}
                text={chapter}
                list={chapterList}
                isOpen={chapterOptions}
                toggleOpen={toggleChapter}
                type={'chapter'}
                width='10rem'
            />
            <DropdownBox
                choice={handleVerseChoice}
                text={verse}
                list={verseList}
                isOpen={verseOptions}
                toggleOpen={toggleVerse}
                type={'verse'}
                width='10rem'
                right={true}
            />
        </div>
    )
}

export default Dropdown
