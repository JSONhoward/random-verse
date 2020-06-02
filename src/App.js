import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.scss';
import Home from './pages/Home/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
    <Header />
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
