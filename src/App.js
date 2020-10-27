import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './styles/app.scss'
import Header from './components/Header'
import PageNotFound from './pages/PageNotFound'
import Login from './pages/Login'
import PrivateRoute from './components/PrivateRoute'
import Dashboard from './pages/Dashboard'
import Products from './pages/Products'
import Spacer from './components/Spacer'
import Log from './pages/Log'

const App = () => {
  return (
    <BrowserRouter>
      <div id="app">
        <Header/>
        <Spacer/>
        <Switch>
          <Route path="/login" exact component={Login}/>
          <PrivateRoute path="/products" component={Products}/>
          <PrivateRoute path="/log/:customer" component={Log}/>
          <PrivateRoute path="/log" component={Log}/>
          <PrivateRoute path="/" component={Dashboard}/>
          <Route component={PageNotFound} status={404}/>
        </Switch>
        <Spacer size={2}/>
      </div>
    </BrowserRouter>
  )
}

export default App
