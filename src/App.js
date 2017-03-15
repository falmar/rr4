import React, {Component} from 'react';
import {BrowserRouter, Route, Link, Prompt} from 'react-router-dom'
import './App.css'

const Links = () => (
  <nav>
    <Link to='/'>Home</Link>
    <Link to='/form'>Form</Link>
  </nav>
)

const Home = () => <h1>Home</h1>
class Form extends Component {
  state = {dirty: false}
  setDirty = () => this.setState({dirty: true})

  render() {
    return (
      <div>
        <h1>Form is {this.state.dirty ? 'dirty' : 'clean'}</h1>
        <input type="text" onInput={this.setDirty}/>
        <Prompt
          when={this.state.dirty}
          message='Data will be lost'>

        </Prompt>
      </div>
    )
  }
}

const App = () => (
  <BrowserRouter>
    <div>
      <Links />
      <Route exact path='/' component={Home} />
      <Route exact path='/form' component={Form} />

    </div>
  </BrowserRouter>
)

export default App;
