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
    width: 15rem;
    margin: 2px;
    box-shadow: 2px 2px 5px black;
    background-color: white;
    font-size: 1.5rem;
    border-top-left-radius: .5rem;
    border-bottom-left-radius: .5rem;
    `

const OptionsDiv = styled.div`
    position: absolute;
    top: 65px;
    left: 0px;
    display: ${props => props.isOpen ? 'flex' : 'none'};
    flex-direction: column;
    align-items: left;
    justify-content: top;
    height: fit-content;
    max-height: 10rem;
    width: calc(13rem - 4px);
    background-color: white;
    animation: fadeIn linear .5s;
    box-shadow: 2px 2px 5px black;
    padding: 2px;
    overflow-y: scroll;
    z-index: 5;
    cursor: pointer;
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
    `

const BookDropdown = () => {
    const [state, dispatch] = useContext(StateContext)
    const { bookOptions, book } = state

    let dropdownList = BIBLE.map((item, i) => {
        return (
            <ListItem
                tabIndex={1}
                id={i}
                onClick={() => chooseBook(item)}
                key={i}
                onKeyPress={e => {
                    if (e.charCode === 32 || e.charCode === 13) {
                        chooseBook(item)
                    }
                }}>
                {item.name}
            </ListItem>
        )
    })

    const chooseBook = option => {
        dispatch({ type: 'CHOOSE_BOOK', payload: option.name })
    }

    const keyOpen = (e) => {
        if (e.target.id === 'dropdown') {
            if (e.charCode === 13 || e.charCode === 32) {
                dispatch({ type: 'TOGGLE_BOOK' })
            }
        }
    }

    const clickOpen = () => {
        dispatch({ type: 'TOGGLE_BOOK' })
    }

    return (
        <>
            <DropdownDiv id={'dropdown'} onKeyPress={e => keyOpen(e)} tabIndex={1}>
                <p>{book}</p>
                <Caret onClick={clickOpen}>
                    <FaCaretDown size={'1.5rem'} />
                </Caret>
                <OptionsDiv isOpen={bookOptions}>
                    {dropdownList}
                </OptionsDiv>
            </DropdownDiv>
        </>
    )
}

export default BookDropdown
