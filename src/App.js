import React from 'react';
import {BrowserRouter, Route, NavLink as Link} from 'react-router-dom'

import './App.css'

const isActiveFunc = (match, location) => {
  console.log(match, location)

  return match
}

const Links = () => (
  <nav>
    <Link exact activeClassName='active' to='/'>Home</Link>
    <Link activeStyle={{color: 'green'}} to='/about'>About</Link>
    <Link
      activeClassName='active'
      isActive={isActiveFunc}
      to='/contact'>
      Contact
    </Link>
  </nav>
)

const App = () => (
  <BrowserRouter>
    <div>
      <Links />

      <Route
        exact
        path='/'
        render={() => <h1>Home</h1>} />
      <Route
        path='/about'
        render={() => <h1>About</h1>} />
      <Route
        path='/contact'
        render={() => <h1>Contact</h1>} />
    </div>
  </BrowserRouter>
)

export default App;
