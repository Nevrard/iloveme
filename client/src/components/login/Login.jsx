import React from 'react';
const Login = () => {
    return (
        <div className="login">
        <input type="text" placeholder="email"/>
        <input type="password" placeholder="password"/>
        <input type="button" value="login"/>
        <input type="button" value="register"/>
    </div>
    )
};
export default Login;