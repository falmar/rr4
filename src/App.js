import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

const App = () => (
  <BrowserRouter>
    <div>
      <Route
        exact
        path='/:a(\d{2}-\d{2}-\d{4}):b(\.[a-z]+)'
        render={({match}) => {
          return (
            <div>
              <h1>A: {match.params.a}</h1>
              <h1>B: {match.params.b}</h1>
            </div>

          )
        }} />
    </div>
  </BrowserRouter>
)

export default App;
