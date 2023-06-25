import React from 'react'
import logo from '../images/logo.webp';
export const Footer = () => {
    return (
        <>
            <footer>
                <div class="footer-content">
                    <div class="footer-left">
                        <div class="footer-logo">
                            <img src={logo} alt="eLearn Logo" />
                        </div>
                        <div class="footer-links">
                            <a href="#">Home</a>
                            <a href="#">Courses</a>
                            <a href="#">About Us</a>
                            <a href="#">FAQs</a>
                        </div>
                        <div class="footer-social">
                            <a href="#"><i class="fab fa-facebook"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div class="footer-right">
                        <h3>Contact Us</h3>
                        <form>
                            <input type="text" placeholder="Your Name" />
                            <input type="email" placeholder="Your Email" />
                            <textarea placeholder="Message"></textarea>
                            <button type="submit">Send</button>
                        </form>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; 2023 eLearn. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
}