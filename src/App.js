import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

const Home = props => {
  console.log(props)

  return <h1>Home</h1>
}
const About = () => <h1>About</h1>

const App = () => (
  <BrowserRouter>
    <div>
      <Route
        exact
        path='/'
        component={Home} />
      <Route
        strict
        path='/about/'
        component={About} />
      <Route
        path='/contact'
        render={() => <h1>Contact</h1>} />
      <Route
        path='/signin'
        children={({match}) => match && <h1>Sign In</h1>} />
    </div>
  </BrowserRouter>
)

export default App;
