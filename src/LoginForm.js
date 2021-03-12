import React from "react";
import "./styles/startpage.scss";

export function LoginForm() {
    return (
        <div className="login-container">
            <form name="login-form" className="login-form" action="#" method="post">
                <label className="login-label" htmlFor="login">Login</label>
                <input id="login" name="login" type="text" className="login-input" placeholder="enter email or phone" required/>
                <label className="login-label password-label" htmlFor="password">Password</label>
                <input id="password" name="password" type="password" className="login-input password-input" placeholder="enter password" required/>
                <span className="input-error"></span>
                <button type="submit" className="btn">Login</button>
            </form>
        </div>
    );
}
