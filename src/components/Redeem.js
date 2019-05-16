import React from 'react';
import { Grid, TextField, Button} from '@material-ui/core';
import {AxiosInstance} from "../AxiosInstance";



export class Redeem extends React.Component {


    state = {
        tPRate: 0.0333,
        fee: 0.086,
        user: JSON.parse(localStorage.getItem('user')),
        amount:0
        };
    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
      };

    redeemTP= () =>{
        //console.log(this.state.amount);
        if(this.state.amount> this.state.user.trophyPoints){
            alert('Monto excede trophyPoints actuales');
        }else if(this.state.amount <= 0){
            alert('El monto ingresado es incorrecto');
        }
        else{
            this.state.user.trophyPoints -= this.state.amount;
            AxiosInstance.getInstance().put("/api/user/" , this.state.user)
            .then(response => {
                localStorage.setItem('user', JSON.stringify(this.state.user));
                this.setState({user: JSON.parse(localStorage.getItem('user'))});
                alert('Operacion realizada exitosamente!' + 'Has canjeado: ' + this.state.amount + 'trophyPoints');
            }).catch(function (error) {
                console.log(error);
                alert(error);
            });


        }

    };
    render() {
        return (<div  >
                    <Grid container direction="column" justify="space-between" alignItems="center"   >
                        <img src={require('../img/TrophyPoints.png')} style={{width:'250px'}} alt="redeem"/>
                        Trophy points actuales: {this.state.user.trophyPoints}

                        <Grid  item md={12} sm={12} xs={12} style={{ marginTop:'30px'}}>
                            <TextField id="monto" label="Monto" onChange={this.handleChange('amount')} type="text" width="160"  fullWidth  variant="outlined" autoFocus   />
                            <br/>
                            Equivalente a: {Math.round(this.state.amount* this.state.tPRate* 1000)/1000} USD
                            <br/>
                            Costo de la transacción: {Math.round((this.state.amount* this.state.tPRate)*this.state.fee * 1000)/1000} USD
                        </Grid>
                        <Grid item md={12} sm={12} xs={12} style={{ marginTop:'40px',marginBottom:'100px'}}>
                            <TextField id="seguridad" label="Código de seguridad" type="text" fullWidth  variant="outlined"   />
                        </Grid>
                    </Grid>


                    <Grid container justify="center" style={{ marginTop: '10px' }}>
                        <Button onClick={this.redeemTP} variant="outlined" color="primary" style={{ textTransform: "none",padding:'20px', maxWidth: '400px', minWidth: '400px'}}>Cambiar</Button>
                    </Grid>
                </div>
        );
    }
}
