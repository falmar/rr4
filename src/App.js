import React from 'react';
import {BrowserRouter, Route, Link, Redirect} from 'react-router-dom'
import './App.css'

const Links = () => (
  <nav>
    <Link to='/'>Home</Link>
    <Link to='/old/123'>Old</Link>
    <Link to='/new/456'>New</Link>
    <Link to='/protected'>Protected</Link>
  </nav>
)

const loggedin = false

const App = () => (
  <BrowserRouter>
    <div>
      <Links />
      <Route exact path='/' render={() => <h1>Home</h1>} />
      <Route
        path='/new/:str'
        render={({match}) => <h1>New {match.params.str}</h1>} />
      <Route path='/old/:str' render={({match}) => {
          return <Redirect to={`/new/${match.params.str}`} />
      }} />
    <Route path='/protected' render={({match}) => {
          return loggedin
          ? <h1>Procted Page</h1>
          : <Redirect to={`/new/Login`} />
      }} />
    </div>
  </BrowserRouter>
)

export default App;
