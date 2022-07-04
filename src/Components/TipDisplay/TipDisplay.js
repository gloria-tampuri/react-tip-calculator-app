import React,{useState, useEffect} from 'react'
import classes from './TipDisplay.module.css'

const TipDisplay = (props) => {
  
    const{totalTip,tip}= props.final

    const [newTotalTip, setNewTotalTip] = useState(0);
    const [newTip, setNewTip] = useState(0)

    useEffect(()=>{
        setNewTip(tip && tip)
        setNewTotalTip(totalTip && totalTip)
    }, [totalTip, tip])

    const[reset,setReset] =useState(false)
   useEffect(() => {
    if(totalTip > 0 && tip > 0){
        return setReset(true)
 
     }
   }, [totalTip,tip]);

  const resetHandler=(e)=>{
        e.preventDefault()
        setNewTip(0);
        setNewTotalTip(0);
       setReset(false)
   }

   console.log(newTip);
   console.log(newTotalTip);
  
    return (
        <div className={classes.wrapper}>

            <div className={classes.showtip}>
                <div className={classes.perperson}>
                    <p>Tip Amount</p>
                    <span>/ person</span>
                </div>
                <div className={classes.amount}><h1><span>$</span>{ newTip &&newTip.toFixed(2)}</h1></div>
            </div>

            <div className={classes.showtip}>
                <div className={classes.perperson}>
                    <p>Total</p>
                    <span>/ person</span>
                </div>
                <div className={classes.amount}><h1><span>$</span><span>{ newTotalTip && newTotalTip.toFixed(2)}</span></h1></div>
            </div>

            <button className={`${classes.reset} ${reset ? classes.resetActivate :null }`}  onClick={resetHandler}>Reset</button>

        </div>
    )
}

export default TipDisplay