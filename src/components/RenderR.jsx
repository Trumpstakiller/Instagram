import React from "react";

export const RenderR = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onFormSwitch('login')

    }
    return (
    <div className="auth-form-container">
        <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            
            <button type="submit" >Go to login</button>

        </form>
    </div>
    )
}