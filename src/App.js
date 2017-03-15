import React from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import './App.css'

const Links = () => (
  <nav>
    <Link to='/'>Home</Link>
    <Link to='/about'>About</Link>
    <Link to='/contact'>Contact</Link>
  </nav>
)

const App = () => (
  <BrowserRouter>
    <div>
      <Links />
      <Switch>
        <Route exact path='/' render={() => <h1>Home</h1>} />
        <Route path='/about' render={() => <h1>About</h1>} />
        <Route render={() => <h1>Page not found</h1>} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default App;
