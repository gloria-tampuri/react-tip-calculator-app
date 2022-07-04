import React from 'react'
import classes from './App.module.css'
import DisplayContainer from './Components/DisplayContainer/DisplayContainer'

const App = () => {
  return (
    <div className={classes.App}>
      <img src='images/logo.svg' alt='logo' className={classes.Logo}/>
      <DisplayContainer/>
    </div>
  )
}

export default App