import React, { useState } from 'react'
import { Button, ButtonGroup, makeStyles } from '@material-ui/core'

const useStyle = makeStyles({
    component: {
        marginTop: 30
    },
    button: {
        borderRadius: '50%'
    }
})

const GroupButtons = () => {
    const classes = useStyle();
    const [counter, setcounter] = useState(1)


    const Incrememt = () => {
       setcounter( counter + 1)
    }
    
    const Decrement = () => {
        setcounter( counter - 1)
     }
    return (
        <ButtonGroup className={classes.component}>
            <Button className={classes.button} onClick={() => { Decrement() }} disabled={counter===1}>-</Button>
            <Button>{counter}</Button>
            <Button className={classes.button} onClick={() => { Incrememt() }}>+</Button>
        </ButtonGroup>
    )
}

export default GroupButtons;

