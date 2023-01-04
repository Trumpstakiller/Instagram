import React, { useState } from "react";
import axios from 'axios';
import * as AppCostants from '../helpers/AppCostants'

export const Register = (props) => {
    const [pass, setPass] = useState('');
    const [nome, setNome] = useState('');
    const [cognome, setCognome] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const obj ={
            nome : nome,
            cognome : cognome,
            pass : pass,
          };
        console.log(obj);
        axios.post(AppCostants.BackendService + "/insert-user.php", obj)
        .then(res=> console.log(res.data))
        .catch(error=> {
        console.log(error.response)
        });

        props.onFormSwitch('RenderR')
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="nome">Nome</label>
            <input value={nome} name="nome" onChange={(e) => setNome(e.target.value)} placeholder="Nome" required />

            <label htmlFor="cognome">Cognome</label>
            <input value={cognome} name="cognome" onChange={(e) => setCognome(e.target.value)} placeholder="Cognome" required/>

            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*************************************" name="password" required pattern=".{6,}" title="Almeno 6 caratteri"/>

            <button type="submit" >Register</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}
