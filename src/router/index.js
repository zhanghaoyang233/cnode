import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from '../views/home'
import Tutorail from '../views/tutorial'
import About from '../views/about'
import User from '../views/user'
import Detail from '../views/detail'

class RouterIndex extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact render={()=> <Redirect to="/index/all" />} />
        <Route path="/index/:tab" component={Home}/>
        <Route path="/tutorial" component={Tutorail}/>
        <Route path="/about" component={About}/>
        <Route path="/user/:loginname" component={User}/>
        <Route path="/detail/:id" component={Detail}/>
      </Switch>
    )
  }
}

export default RouterIndex