import React, { useReducer } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import styled from 'styled-components'
import { reducer } from './store/reducer'
import { initialState, StateContext } from './store/state'
import Home from './pages/Home/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';

const AppStyled = styled.div`
background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
overflow-x: hidden;
`

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleClickClose = e => {
    if (!e.target.id && state.bookOptions) {
      dispatch({ type: 'CLOSE_ALL' })
    } else if (!e.target.id && state.chapterOptions) {
      dispatch({ type: 'CLOSE_ALL' })
    } else if (!e.target.id && state.verseOptions) {
      dispatch({ type: 'CLOSE_ALL' })
    }
  }

  const handleEscapeClose = e => {
    if (e.key === 'Escape' && e.target.id) {
      dispatch({ type: 'CLOSE_ALL' })
    }
  }

  return (
    <StateContext.Provider value={[state, dispatch]}>
      <AppStyled onClick={e => handleClickClose(e)} tabIndex='0' onKeyDown={e => handleEscapeClose(e)}>
        <Header />
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </Router>
        <Footer />
      </AppStyled>
    </StateContext.Provider>
  );
}

export default App;
