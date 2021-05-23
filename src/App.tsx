import React, { Component } from 'react'
import { HashRouter, Route, Link } from 'react-router-dom'
import Home from "./scenes/Home"
import About from "./scenes/About"

const App = () => (
  <HashRouter basename={process.env.PUBLIC_URL}>
    <div>
      {process.env.PUBLIC_URL}
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
      </ul>

      <hr />
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
    </div>
  </HashRouter>
)


export default App