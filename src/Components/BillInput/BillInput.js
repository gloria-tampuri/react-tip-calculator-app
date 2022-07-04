import React, { useState } from 'react'
import classes from './BillInput.module.css'

const BillInput = (props) => {
  const [bill, setbill] = useState('');
  const [persons, setPersons] = useState('')
  // const [custom, setCustom] = useState('')
  const [error, setError] = useState(false)
  const [errorMsg, setErrorMsg] = useState(true)
 

  const billHandler = (event) => {
    setbill(+event.target.value)

  }

  const personsHandler = (event) => {
    setErrorMsg(true)
    setError(false)
   
    setPersons(+event.target.value);


  }

  const calc =(percentage)=>{
    // const percentage = +event.target.value;
    if (bill <= 0 || persons <= 0) {
      setError(true)
      setErrorMsg(false)
      return;
    }
    else {
      const totalTip = bill * percentage;
      const tip = totalTip / persons;
      
      props.onInput({totalTip, tip})
     
      }
  }

  const customHandler = (event) => {
    // setCustom(+event.target.value)
    const percentage = +event.target.value/100;
    calc(percentage)
  }

  const percentageHandler = (event) => {
    const percentage = +event.target.value;
    calc(percentage)
      }

       
      
  


  return (
    <div className={classes.operationPart}>

      <form>
        <label>Bill</label>
        <div className={classes.inputSection}>
          <img src='images/icon-dollar.svg' alt='dollar' />
          <input type='text' placeholder='0' value={bill} required onChange={billHandler} />
        </div>
      </form>
      <p>Select Tip %</p>
      <div className={classes.percentages}>
        <button className={classes.percentage} onClick={percentageHandler} value={0.05}> 5% </button>
        <button className={classes.percentage} onClick={percentageHandler} value={0.10}> 10%</button>
        <button className={classes.percentage} onClick={percentageHandler} value={0.15}> 15%</button>
        <button className={classes.percentage} onClick={percentageHandler} value={0.25}> 25%</button>
        <button className={classes.percentage} onClick={percentageHandler} value={0.50}> 50% </button>
        <input type='text' placeholder='Custom'  onChange={customHandler} />
      </div>

      <p> Number of people <span className= {`${errorMsg ? classes.errordisplay:classes.errorMsg}`}>
        Can't be zero</span></p>
      <div className={`${classes.inputSection} ${error ? classes.error : null}`}>
        <img src='images/icon-person.svg' alt='person' />
        <input type='text' placeholder='0' value={persons} onChange={personsHandler} />
      </div>

    </div>
  )
  }


export default BillInput