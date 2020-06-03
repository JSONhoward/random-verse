import React, { useContext } from 'react'
import styled from 'styled-components'

import styles from './Home.module.scss'
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
`

const Home = () => {
    const [state, dispatch] = useContext(StateContext)

    const getVerse = bibleData()

    const handleClickClose = e => {
        if (!e.target.id && state.bookOptions) {
            dispatch({ type: 'CLOSE_ALL' })
        }
    }

    const handleEscapeClose = e => {
        if (e.key === 'Escape' && e.target.id) {
            dispatch({ type: 'CLOSE_ALL' })
        }
    }

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
        <main onKeyDown={e => handleEscapeClose(e)} onClick={e => handleClickClose(e)} className={styles.Home}>
            {
                state.loading ? <Spinner /> :
                    <Verse />
            }

            <ChooseVerseDiv className={styles['choose-verse']}>
                <Dropdown />
                <Button fetch={fetchVerse} />
            </ChooseVerseDiv>
        </main>
    )
}

export default Home
