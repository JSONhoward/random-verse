import React, { useContext } from 'react'
import { FaCaretDown } from 'react-icons/fa'

import { StateContext } from '../../store/state'
import { BIBLE } from '../../utils/bible'
import {ListItem, DropdownDiv, OptionsDiv, Caret} from './styles'

const ChapterDropdown = () => {
    const [state, dispatch] = useContext(StateContext)
    const { chapterOptions, book, chapter } = state

    const chapterList = book !== "(Random)" ? BIBLE.filter(el => {
        return el.name === book
    }).map(el => el.chapters).flat(1) : []

    let dropdownList = chapterList.map((item, i) => {
        return (
            <ListItem
                tabIndex={1}
                id={i}
                onClick={() => chooseChapter(i)}
                key={i}
                onKeyPress={e => {
                    if (e.charCode === 32 || e.charCode === 13) {
                        chooseChapter(i)
                    }
                }}>
                Ch. {i + 1}
            </ListItem>
        )
    })

    const chooseChapter = option => {
        dispatch({ type: 'CHOOSE_CHAPTER', payload: option + 1 })
    }

    const keyOpen = (e) => {
        if (e.target.id === 'dropdown1') {
            if (e.charCode === 13 || e.charCode === 32) {
                dispatch({ type: 'TOGGLE_CHAPTER' })
            }
        }
    }

    const clickOpen = () => {
        dispatch({ type: 'TOGGLE_CHAPTER' })
    }

    return (
        <>
            <DropdownDiv id={'dropdown1'} onKeyPress={e => keyOpen(e)} tabIndex={1}>
                <p>{chapter}</p>
                <Caret onClick={clickOpen}>
                    <FaCaretDown size={'1.5rem'} />
                </Caret>
                <OptionsDiv isOpen={chapterOptions}>
                    {dropdownList}
                </OptionsDiv>
            </DropdownDiv>
        </>
    )
}

export default ChapterDropdown
