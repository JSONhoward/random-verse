import React, { useContext } from 'react'
import { FaCaretDown } from 'react-icons/fa'

import { StateContext } from '../../store/state'
import { BIBLE } from '../../utils/bible'
import {ListItem, DropdownDiv, Caret, OptionsDiv} from './styles'

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
        <DropdownDiv id={'dropdown'} onKeyPress={e => keyOpen(e)} tabIndex={1}>
            <p>{book}</p>
            <Caret onClick={clickOpen}>
                <FaCaretDown size={'1.5rem'} />
            </Caret>
            <OptionsDiv isOpen={bookOptions}>
                {dropdownList}
            </OptionsDiv>
        </DropdownDiv>
    )
}

export default BookDropdown
