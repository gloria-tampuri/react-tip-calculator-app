import React ,{useState}from 'react';
import BillInput from '../BillInput/BillInput';
import TipDisplay from '../TipDisplay/TipDisplay';
import classes from './DisplayContainer.module.css'

const DisplayContainer = () => {

  const[result, setResult]= useState({})

  const acceptResult = (totalTip, tip)=>{
   setResult(totalTip, tip)
   
  }
  console.log(result);

  return (
    <div className={classes.container}>
      <div className={classes.leftPart}>
      <BillInput onInput={acceptResult}/>
      </div>

      <div className={classes.rightPart}>
        <TipDisplay final={result}/>
      </div>
    </div>
  )
}

export default DisplayContainer