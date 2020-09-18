import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Login from './components/Login'
import BubblePage from './components/BubblePage'
import './styles.scss'

// PrivateRoute....

function App() {
  const [colorList, setColorList] = useState([])
  return (
    <Router>
      <div className='App'>
        <Route exact path='/' component={Login} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        {/* <PrivateRoute exact path='/BubblePage' component={BubblePage} /> */}
      </div>
    </Router>
  )
}

export default App
