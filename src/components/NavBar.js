import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import TrophyLogo from '../img/TrophyLogo1.png'

const NavBar = () => {
    return(
        <div>
        <AppBar position="static">
            <Toolbar>
                <img src={TrophyLogo} alt="Trophy Logo" height={50}/>
                <Typography variant="title" color="inherit">
                Trophy App
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
    )
}

export default NavBar;