import React, { useState } from "react";
import axios from 'axios';
import * as AppCostants from '../helpers/AppCostants'

export const Login = (props) => {
    const [pass, setPass] = useState('');
    const [nome, setNome] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const obj ={
            nome : nome,
            pass : pass,
          };
        axios.post(AppCostants.BackendService + "/login-user.php", obj)
        .then((res) =>{
            console.log(res);
            if(res.status === 200){
                window.localStorage.setItem('nome', nome);
                props.onFormSwitch('home');
                
            }
            else{
                alert('Invalid user or Psw');
            }


        })
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>

                <label htmlFor="nome">Nome</label>
                <input value={nome} name="nome" onChange={(e) => setNome(e.target.value)} placeholder="Nome" required />

                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*************************************" name="password" required pattern=".{4,}" title="Almeno 6 caratteri"/>
                
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}