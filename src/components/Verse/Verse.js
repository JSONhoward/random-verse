import React, { useContext } from 'react'

import { VerseStyled, VerseInfo, VerseContent } from './styles'
import { StateContext } from '../../store/state'

const Verse = () => {
    const [state] = useContext(StateContext)
    const { displayVerse } = state

    return (
        <VerseStyled>
            <VerseInfo>{displayVerse.verse}</VerseInfo>
            <VerseContent>{displayVerse.content}</VerseContent>
        </VerseStyled>
    )
}

export default Verse
