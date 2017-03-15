import React from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import './App.css'

const Links = () => (
  <nav>
    <Link to='/'>Home</Link>
    <Link to='/menu'>Menu</Link>
  </nav>
)

const Home = () => <h1>Home</h1>
const Menu = () => (
  <div>
    <h1>Menu</h1>

    <Link to='/menu/food'>Food</Link>
    <Link to='/menu/drink'>Drink</Link>
    <Link to='/menu/sides'>Sides</Link>

    <Route
      path='/menu/:section'
      render={({match}) => {
        return (
          <h2>{match.params.section}</h2>
        )
    }} />
  </div>
)

const App = () => (
  <BrowserRouter>
    <div>
      <Links />
      <Route exact path='/' component={Home} />
      <Route path='/menu' component={Menu} />
    </div>
  </BrowserRouter>
)

export default App;
