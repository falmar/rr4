import React from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import './App.css'

const Links = () => (
  <nav>
    <Link to='/home'>Home</Link>
    <Link to='/about'>About</Link>
  </nav>
)

const Header = () => (
  <div className='header'>
    <Route
      path='/:page'
      render={({match}) => <h1>{match.params.page} header</h1>} />
  </div>
)

const Content = () => (
  <div className='content'>
    <Route
      path='/:page'
      render={({match}) => <p>{match.params.page} content</p>} />
  </div>
)

const App = () => (
  <BrowserRouter>
    <div>
      <Links />
      <Header />
      <Content />

    </div>
  </BrowserRouter>
)

export default App;
