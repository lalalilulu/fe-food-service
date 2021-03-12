import React from "react";
import "./styles/startpage.scss";
import "./styles/startpage.scss";

export function SignUpForm() {
    return (
        <div className="login-container">
            <form name="login-form" className="login-form" action="#" method="post">
                <label className="login-label" htmlFor="name">Name Surname</label>
                <input id="name" name="name" type="text" className="login-input" placeholder="enter your name and surname" required/>
                <label className="login-label" htmlFor="email">Email</label>
                <input id="email" name="email" type="email" className="login-input" placeholder="enter your email" required/>
                <label className="login-label" htmlFor="phone">Phone</label>
                <input id="phone" name="phone" type="tel" className="login-input" placeholder="enter your phone" required/>
                <label className="login-label password-label" htmlFor="password">Password</label>
                <input id="password" name="password" type="password" className="login-input password-input" placeholder="enter password" required/>
                <label className="login-label password-label" htmlFor="repeat-password">Repeat Password</label>
                <input id="repeat-password" name="repeat-password" type="password" className="login-input password-input" placeholder="enter password again" required/>
                <span className="input-error"></span>
                <button type="submit" className="btn">Sign Up</button>
            </form>
        </div>
    );
}
