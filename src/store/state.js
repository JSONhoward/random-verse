import {createContext} from 'react'

const homeContent = 'For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.'
const homeVerse = 'John 3:16'

export const initialState = {
    bookOptions: false,
    chapterOptions: false,
    verseOptions: false,
    book: '(Random)',
    chapter: '(Random)',
    verse: '(Random)',
    displayVerse: {
        verse: homeVerse,
        content: homeContent
    },
    loading: false
}

export const StateContext = createContext(null)