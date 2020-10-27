import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import Customer from '../Customer'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (Customer.isSet() === true ? <Component {...props} /> : <Redirect to="/login" />)}
  />
)

export default PrivateRoute
