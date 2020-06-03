import React, { useReducer } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { reducer } from './store/reducer'
import { initialState, StateContext } from './store/state'
import './App.scss';
import Home from './pages/Home/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <StateContext.Provider value={[state, dispatch]}>
      <div className="App">
        <Header />
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </Router>
        <Footer />
      </div>
    </StateContext.Provider>
  );
}

export default App;
