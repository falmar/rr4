import React from 'react';
import {
  BrowserRouter,
  Route,
  Link,
  HashRouter,
  MemoryRouter,
  StaticRouter
} from 'react-router-dom'
import './App.css'

const Links = () => (
  <nav>
    <Link to='/'>Home</Link>
    <Link to='/about'>About</Link>
  </nav>
)

const App = () => (
  <div>
    <Links />
    <Route exact path='/' render={() => <h1>Home</h1>} />
    <Route path='/about' render={() => <h1>About</h1>} />
  </div>
)

const forceRefresh = () => {
  console.log(new Date())

  return false
}

const BrowserRouterApp = () => (
  <BrowserRouter forceRefresh={forceRefresh()}>
    <App />
  </BrowserRouter>
)

const HashRouterApp = () => (
  <HashRouter hashType="hashbang">
    <App />
  </HashRouter>
)

const MemoryRouterApp = () => (
  <MemoryRouter initialEntries={['/', '/about']} initialIndex={1}>
    <App />
  </MemoryRouter>
)

const StaticRouterApp = () => (
  <StaticRouter location='/about' context={{}}>
    <App />
  </StaticRouter>
)

export default StaticRouterApp;
