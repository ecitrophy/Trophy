import React from 'react';
import { Paper, withStyles, Grid, TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';


const styles = theme => ({
    margin: {
        margin: theme.spacing.unit * 2,
    },
    padding: {
        padding: theme.spacing.unit
    }
});

export class Redeem extends React.Component {
    render() {

        return (
          <div className="App-redeem">
                <img src={require('../img/money.png')} style={{ top:'18%',right:'20%',position:'absolute',width:'250px'}}/>
                <div  >
                    <Grid container direction="column" justify="space-between" alignItems="center"   >
                        <Grid  item md={12} sm={12} xs={12} style={{ marginTop:'30px'}}>
                            <TextField id="monto" label="Monto" type="text" width="160"  fullWidth  variant="outlined" autoFocus   />
                        </Grid>
                        <div  className="App-redeem_space"></div>
                        <Grid item md={12} sm={12} xs={12} style={{ marginTop:'40px',marginBottom:'100px'}}>
                            <TextField id="seguridad" label="Código de seguridad" type="text" fullWidth  variant="outlined"   />
                        </Grid>
                    </Grid>


                    <Grid container justify="center" style={{ marginTop: '10px' }}>
                        <Button variant="outlined" color="primary" style={{ textTransform: "none",padding:'20px', maxWidth: '400px', minWidth: '400px'}}>Cambiar</Button>
                    </Grid>
                </div>

            </div>
        );
    }
}
