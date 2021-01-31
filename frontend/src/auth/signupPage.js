import React from 'react'
import { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import {logIn, signUp} from '../requests'

import AuthLayout from './authPageLayout' 

import './auth.css'

import {LOGIN_PAGE, MAIN_PAGE} from '../routes'


class SignUpPage extends Component{
    state = {
        username: '',
        password: '',
        passwordRepeat: ''
    };

    onSignUp = () => {
        signUp(this.state.username, this.state.password);
    }

    render() { 
        const body = 
            <AuthLayout>
                <input 
                    class="form__input" 
                    type="text" 
                    placeholder="Username" 
                    value={this.state.username} 
                    onChange={(e) => {this.setState({username: e.target.value})}}
                />
                
                <input 
                    class="form__input" 
                    type="password" 
                    placeholder="Password"
                    value={this.state.password} 
                    onChange={(e) => {this.setState({password: e.target.value})}}
                />

                {/*TODO: add checks for password repeat*/}
                <input 
                    class="form__input" 
                    type="password" 
                    placeholder="Repeat password"
                    value={this.state.passwordRepeat} 
                    onChange={(e) => {this.setState({passwordRepeat: e.target.value})}}
                />

                <button class="form__button" onClick={this.onSignUp}>Sign Up</button>
                <Link to={LOGIN_PAGE} class="form__button"> Cancel </Link>
            </AuthLayout>
        return (body);
    }
}

export default SignUpPage;