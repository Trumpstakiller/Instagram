import React, { useState, useEffect } from "react";

export const Home = (props) => {
    const [nome, setNome] = useState('');
    useEffect(()=>{
        var nome = localStorage.getItem('nome');
        setNome(nome);
    },[])


    return (
    <div className="auth-form-container">
        <h2>Benvenuto {nome} </h2>

    </div>
    )
}