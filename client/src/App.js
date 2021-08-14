import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import Home from './pages/Home'
import Header from './components/Header/index'

function App() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </React.Fragment>
  );
}

export default App;
