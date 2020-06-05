import React, { useContext } from 'react'
import { FaCaretDown } from 'react-icons/fa'
import styled from 'styled-components'

import { StateContext } from '../../store/state'
import { BIBLE } from '../../utils/bible'

const DropdownDiv = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 4rem;
    width: 10rem;
    margin: 2px;
    box-shadow: 2px 2px 5px black;
    background-color: white;
    font-size: 1.5rem;
    border-top-right-radius: .5rem;
    border-bottom-right-radius: .5rem;

    @media (max-width: 500px) {
        height: 3rem;
        width: 5rem;
        font-size: 1rem;
    }
    `

const OptionsDiv = styled.div`
    position: absolute;
    top: 50px;
    left: 0px;
    display: ${props => props.isOpen ? 'flex' : 'none'};
    flex-direction: column;
    align-items: left;
    justify-content: top;
    height: fit-content;
    max-height: 10rem;
    width: 7.8rem;
    background-color: white;
    animation: fadeIn linear .5s;
    box-shadow: 2px 2px 5px black;
    padding: 2px;
    overflow-y: scroll;
    z-index: 5;
    cursor: pointer;

    @media (max-width: 500px) {
        width: 5rem;
       
    }
    `

const ListItem = styled.div`
    margin-bottom: 2px;
    text-align: center;
    font-style: italic;
    `

const Caret = styled.div`
    position: absolute;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 2rem;
    background-color: whitesmoke;
    border-top-right-radius: .5rem;
    border-bottom-right-radius: .5rem;
    cursor: pointer;

    @media (max-width: 500px) {
        width: 1rem;
    }
    `

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
