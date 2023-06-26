import React from 'react'
import { Link } from "react-router-dom";
import logo from '../images/logo.webp';
export const Navbar = () => {
    return (
        <>
            <nav>
                <Link class="logo" to="/">
                    <img src={logo} alt="eLearn Logo" />
                    <span class="name">eLearn</span>
                </Link>
                <div class="links">
                    <Link to="/register">Register</Link>
                    <Link to="/login">Login</Link>
                    <Link to="#">Courses</Link>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/profile">My Profile</Link>
                </div>
            </nav>
        </>
    );
}