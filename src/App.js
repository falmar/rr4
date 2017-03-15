import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

const App = () => (
  <BrowserRouter>
    <div>
      <Route
        exact
        path='/:page?/:subpage?'
        render={({match}) => {
          return (
            <div>
              <h1>Page: {match.params.page || 'Home'}</h1>
              <h1>SubPage: {match.params.subpage}</h1>
            </div>

          )
        }} />        
    </div>
  </BrowserRouter>
)

export default App;
