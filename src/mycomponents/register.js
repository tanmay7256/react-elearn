import React, { useEffect } from 'react';
// import 'jquery-ui/ui/widgets/datepicker';
import $ from 'jquery';

export const Register = () => {
    useEffect(() => {
        $(document).ready(function () {
            // $("#dob").datepicker();

            $('form').submit(function (event) {
                event.preventDefault();
                if (window.confirm('Are you sure you want to submit the form?')) {
                    $(this).unbind('submit').submit();
                }
            });

            $('#dob').click(function (event) {
                var password = $('#password').val();
                var confirmPassword = $('#confirmPassword').val();
                if (password !== confirmPassword) {
                    var submitbtn = $('#submitBtn');
                    submitbtn.css('background-color', 'red');
                    submitbtn.val('Passwords do not match.');
                }
            });
        });
    }, []);

    return (
        <>
            <div class="register-page container">
                <h2>Register</h2>
                <form>
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required />

                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required />

                    <label for="confirmPassword">Confirm Password:</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" required />

                    <label for="dob">Date of Birth:</label>
                    <input type="date" id="dob" name="dob" required />

                    <input type="submit" value="Register" id="submitBtn" />
                </form>
            </div>
        </>
    );
}