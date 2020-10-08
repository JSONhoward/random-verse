import React, { useContext } from 'react'
import styled from 'styled-components'

import Dropdown from '../../components/Dropdown/Dropdown'
import Button from '../../components/Button/Button'
import { bibleData } from '../../utils/bible'
import Verse from '../../components/Verse/Verse'
import Spinner from '../../components/Spinner/Spinner'
import { StateContext } from '../../store/state'

const ChooseVerseDiv = styled.div`
display: flex;
flex-directions: row;
align-items: center;

@media (max-width: 500px) {
    flex-direction: column;
    justify-content: space-between;
}
`

const MainStyled = styled.main`
height: calc(100vh - 8rem);
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const Home = () => {
    const [state, dispatch] = useContext(StateContext)

    const getVerse = bibleData()

    const fetchVerse = () => {
        dispatch({ type: 'LOADING_TRUE' })
        if (state.book === '(Random)') {
            getVerse().then(res => dispatch({ type: 'SET_VERSE', payload: res })).then(() => dispatch({ type: 'LOADING_FALSE' }))
        } else if (state.chapter === '(Random)') {
            getVerse(state.book).then(res => dispatch({ type: 'SET_VERSE', payload: res })).then(() => dispatch({ type: 'LOADING_FALSE' }))
        } else if (state.verse === '(Random)') {
            getVerse(state.book, state.chapter).then(res => dispatch({ type: 'SET_VERSE', payload: res })).then(() => dispatch({ type: 'LOADING_FALSE' }))
        } else {
            getVerse(state.book, state.chapter, state.verse).then(res => dispatch({ type: 'SET_VERSE', payload: res })).then(() => dispatch({ type: 'LOADING_FALSE' }))
        }
    }

    return (
        <MainStyled>
            {
                state.loading ? <Spinner /> :
                    <Verse />
            }
            <ChooseVerseDiv>
                <Dropdown />
            </ChooseVerseDiv>
            <Button fetch={fetchVerse} />
        </MainStyled>
    )
}

export default Home
