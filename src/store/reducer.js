export const reducer = (state, action) => {
    let book, chapter, verse, toggle, displayVerse
    switch(action.type) {
        case 'LOADING_TRUE':
            state = {...state, loading: true}
            return state;
        case 'LOADING_FALSE':
            state = {...state, loading: false}
            return state;
        case 'SET_VERSE':
            displayVerse = action.payload
            state = {...state, displayVerse}
            return state;
        case 'TOGGLE_BOOK':
            toggle = !state.bookOptions
            state = {...state, bookOptions: toggle}
            return state;
        case 'TOGGLE_CHAPTER':
            toggle = !state.chapterOptions
            state = {...state, chapterOptions: toggle}
            return state;
        case 'TOGGLE_VERSE':
            toggle = !state.verseOptions
            state = {...state, verseOptions: toggle}
            return state;
        case 'CHOOSE_BOOK':
            book = action.payload
            chapter = '(Random)'
            verse = '(Random)'
            state = {...state, book, chapter, verse, bookOptions: false}
            return state;
        case 'CHOOSE_CHAPTER':
            chapter = action.payload
            state = {...state, chapter, chapterOptions: false}
            return state;
        case 'CHOOSE_VERSE':
            verse = action.payload
            state = {...state, verse, verseOptions: false}
            return state;
        case 'CLOSE_ALL':
                state = {
                    ...state,
                    bookOptions: state.bookOptions && false,
                    chapterOptions: state.chapterOptions && false,
                    verseOptions: state.verseOptions && false
                }
            return state;
        default:
            return state;
    }
}