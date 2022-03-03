import React, { Component } from 'react';
import Joi from 'joi-browser';
import { join } from 'lodash';
import Form from './common/form';

class LoginForm extends Form {
    // username = React.createRef(); autofocus klo mau diaktifkan
    state= {
        data: {  username: '', password: '' },
        errors: {}
    };
    
    schema = {
        username: Joi
        .string()
        .required()
        .label('Username'),
        password: Joi
        .string()
        .required()
        .label('Password')
    };

    // componentDidMount() {
    //     this.username.current.focus();
    // } klo pake autofocus ini diaktifkan

    doSubmit = () => {
        //call the server 
        console.log("Submitted")
    }


    render() { 
        return (
            <div className='container'>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('username', 'Username')}
                    {this.renderInput('password', 'Password', 'password')}
                    {this.renderButton('Login')}
                </form>
            </div>
        );
    }
}
 
export default LoginForm;