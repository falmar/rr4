import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'

const Links = () => (
  <nav>
    <Link to='/'>Home</Link> &nbsp;
    <Link to={{pathname: '/about'}}>About</Link> &nbsp;
    <Link replace to='/contact'>About</Link>
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
