import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Home from "./scenes/Home"
import About from "./scenes/About"

const App = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
      </ul>

      <hr />
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
    </div>
  </BrowserRouter>
)


export default App