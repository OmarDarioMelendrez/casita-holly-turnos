import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import Home from './pages/Home'
import AddTurn from './pages/AddTurn'
import AddClient from './pages/AddClient'
import AddPet from './pages/AddPet'
import Clients from './pages/Clients'
import Header from './components/Header/index'

function App() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/addTurn" exact component={AddTurn} />
        <Route path="/addClient" exact component={AddClient} />
        <Route path="/addPet" exact component={AddPet} />
        <Route path="/clients" exact component={Clients} />
        <Redirect to="/" />
      </Switch>
    </React.Fragment>
  );
}

export default App;
