import React, { Component } from "react";
import httpService from './../../../service/HttpService';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class Aboult extends Component {

    constructor() {
        super()
        this.state = { msg: '' }
        this.httpService = new httpService();
    }

    render() {
        return (
            <div>
                <TextField
                    hintText="Nome"
                    floatingLabelText="Nome"
                    fullWidth={true}
                    ref={(input) => { this.name = input; }}
                />
                <TextField
                    hintText="Email"
                    floatingLabelText="Email"
                    fullWidth={true}
                    ref={(input) => { this.email = input; }}
                />
                <TextField
                    hintText="Senha"
                    floatingLabelText="Senha"
                    type="password"
                    fullWidth={true}
                    errorText={'Yes me !'}
                    ref={(input) => { this.password = input; }}
                />
                <RaisedButton
                    label="salvar"
                    backgroundColor="#0ac752"
                    labelStyle={{color:'white'}}
                    style={{float:'right', margin:'0px 25px 20px 20px'}}/>
                <br/>
            </div>
        )
    }
}
export default Aboult;