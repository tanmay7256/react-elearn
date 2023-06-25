import React, { useEffect } from 'react';
import $ from "jquery"
export const Login = () => {
    useEffect(() => {
        $(document).ready(function () {
            $('form').submit(function (event) {
                event.preventDefault();
                if (window.confirm('Are you sure you want to submit the form?')) {
                    $(this).unbind('submit').submit();
                }
            });
        });
    }, []);

    return (
        <>
            <div class="container">
                <h2>Login</h2>
                <form>
                    <label for="email" id="email">Email:</label>
                    <input type="email" id="email" name="email" required />

                    <label for="password" id="name">Password:</label>
                    <input type="password" id="password" name="password" required />

                    <input type="submit" value="Login" id="submitBtn" />
                    <a href="forgot_password.html" class="forgot-password">Forgot Password?</a>
                </form>
            </div>
        </>
    );
}