import React from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import Testimonial from './components/Testimonial'
import Products from './components/Products'
import './css/App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">

            <Contact />
          </Route>
          <Route exact path="/testimonial">

            <Testimonial />
          </Route>

        </Switch>
      </Router>
    </div>
  )
}

export default App
