import React, { useContext } from 'react'
import { FaCaretDown } from 'react-icons/fa'

import { StateContext } from '../../store/state'
import { BIBLE } from '../../utils/bible'
import { ListItem, DropdownDiv, OptionsDiv, Caret } from './styles'

const VerseDropdown = () => {
    const [state, dispatch] = useContext(StateContext)
    const { verseOptions, book, chapter, verse } = state

    const chapterList = book !== "(Random)" ? BIBLE.filter(el => {
        return el.name === book
    }).map(el => el.chapters).flat(1) : []
    const verseList = chapter !== "(Random)" ? [...Array(chapterList[chapter - 1]).keys()].map(el => el + 1) : []

    let dropdownList = verseList.map((item, i) => {
        return (
            <ListItem
                tabIndex={1}
                id={i}
                onClick={() => chooseVerse(item)}
                key={i}
                onKeyPress={e => {
                    if (e.charCode === 32 || e.charCode === 13) {
                        chooseVerse(item)
                    }
                }}>
                {item}
            </ListItem>
        )
    })

    const chooseVerse = option => {
        dispatch({ type: 'CHOOSE_VERSE', payload: option })
    }

    const keyOpen = (e) => {
        if (e.target.id === 'dropdown2') {
            if (e.charCode === 13 || e.charCode === 32) {
                dispatch({ type: 'TOGGLE_VERSE' })
            }
        }
    }

    const clickOpen = () => {
        dispatch({ type: 'TOGGLE_VERSE' })
    }

    return (
        <>
            <DropdownDiv id={'dropdown2'} onKeyPress={e => keyOpen(e)} tabIndex={1}>
                <p>{verse}</p>
                <Caret onClick={clickOpen}>
                    <FaCaretDown size={'1.5rem'} />
                </Caret>
                <OptionsDiv isOpen={verseOptions}>
                    {dropdownList}
                </OptionsDiv>
            </DropdownDiv>
        </>
    )
}

export default VerseDropdown
