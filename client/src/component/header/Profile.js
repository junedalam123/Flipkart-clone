import { Typography,Menu,MenuItem,makeStyles } from '@material-ui/core';
import React,{useState} from 'react'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import {Link} from "react-router-dom"



const useStyle = makeStyles({
    component:{
        marginTop:40
    },
    logout:{
        marginLeft:20,
        fontSize:14
    }
})
    
const Profile = ({ account, setAccount }) => {
    const classes = useStyle();

    const [open, setopen] = useState("")
    const handleClose = ()=>{
        setopen(false)
    }

    const handleClick =(event)=>{
        setopen(event.currentTarget)
    }
const Logout =()=>{
    setAccount('');
}

    return (
        <>
           <Link><Typography style={{ marginTop: "5px" }} onClick={handleClick}>{account}</Typography></Link>

            <Menu
                anchorEl={open}
                keepMounted
                open={Boolean(open)}
                onClose={handleClose}
                className={classes.component}
            >

                <MenuItem onClick={()=>{handleClose(); Logout();}}><PowerSettingsNewIcon fontSize="small" color="primary"/>
                <Typography className={classes.logout}>Logout</Typography></MenuItem>
            </Menu>
        </>
    )
}

export default Profile