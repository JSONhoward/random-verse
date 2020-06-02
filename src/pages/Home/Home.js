import React, { useState } from 'react'
import styled from 'styled-components'

import style from './Home.module.scss'
import Dropdown from '../../components/Dropdown/Dropdown'
import Button from '../../components/Button/Button'
import { bibleData } from '../../utils/bible'

const homeContent = 'For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.'
const homeVerse = 'John 3:16'

const ChooseVerseDiv = styled.div`
display: flex;
flex-directions: row;
align-items: center;
`

const VerseContent = styled.div`
position: relative;
display: flex;
justify-content: center;
font-size: 1.5rem;
min-height: 100px;
width: 500px;
margin-bottom: 3rem;
padding-top: 3rem;
font-style: italic;
text-shadow: 1px 1px 1px white;
`

const VerseInfo = styled.div`
position: absolute;
top: 0;
left: 5px;
font-weight: bold;
`

const Home = () => {
    const [bookOptions, setBookOptions] = useState(false)
    const [chapterOptions, setChapterOptions] = useState(false)
    const [verseOptions, setVerseOptions] = useState(false)
    const [book, setBook] = useState('(Random)')
    const [chapter, setChapter] = useState('(Random)')
    const [verse, setVerse] = useState('(Random)')
    const [displayVerse, setDisplayVerse] = useState({ verse: homeVerse, content: homeContent })

    const getVerse = bibleData()

    const handleBookChoice = (item) => {
        setBook(item)
        setChapter('(Random)')
        setVerse('(Random)')
    }

    const handleChapterChoice = (item) => {
        setChapter(item)
    }

    const handleVerseChoice = (item) => {
        setVerse(item)
    }

    const toggleBook = () => {
        setBookOptions(!bookOptions)
    }

    const toggleChapter = () => {
        setChapterOptions(!chapterOptions)
    }

    const toggleVerse = () => {
        setVerseOptions(!verseOptions)
    }

    const handleClose = (event) => {
        if (event.target.id.length < 1) {
            bookOptions && setBookOptions(false)
            chapterOptions && setChapterOptions(false)
            verseOptions && setVerseOptions(false)
        }
    }

    const fetchVerse = () => {
        if (book === '(Random)') {
            getVerse().then(res => setDisplayVerse(res))
        } else if (chapter === '(Random)') {
            getVerse(book).then(res => setDisplayVerse(res))
        } else if (verse === '(Random)') {
            getVerse(book, chapter).then(res => setDisplayVerse(res))
        } else {
            getVerse(book, chapter, verse).then(res => setDisplayVerse(res))
        }
    }

    return (
        <main onClick={event => handleClose(event)} className={style.Home}>
            <VerseContent>
                <VerseInfo>{displayVerse.verse}</VerseInfo>
                {displayVerse.content}
            </VerseContent>
            <ChooseVerseDiv className={style['choose-verse']}>
                <Dropdown
                    toggleBook={toggleBook}
                    toggleChapter={toggleChapter}
                    toggleVerse={toggleVerse}
                    bookOptions={bookOptions}
                    chapterOptions={chapterOptions}
                    verseOptions={verseOptions}
                    handleBookChoice={handleBookChoice}
                    handleChapterChoice={handleChapterChoice}
                    handleVerseChoice={handleVerseChoice}
                    book={book}
                    chapter={chapter}
                    verse={verse}
                />
                <Button fetch={fetchVerse} />
            </ChooseVerseDiv>
        </main>
    )
}

export default Home
