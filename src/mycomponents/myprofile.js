import React from 'react'
import logo from '../images/logo.webp';
export const Profile = () => {
    return (
        <>
            <div class="profile-container">
                <section class="profile">
                    <h2 class="profile-heading">My Profile</h2>
                    <div class="profile-section">
                        <div class="profile-image">
                            <img src="https://oncampus.sjny.edu/wp-content/uploads/2017/12/tips-for-studying.jpg" alt="Profile Image" />
                        </div>
                        <div class="profile-info">
                            <div class="profile-details">
                                <h3 class="profile-name">John Doe</h3>
                                <ul>
                                    <li><strong>Email:</strong> john.doe@example.com</li>
                                    <li><strong>Username:</strong> johndoe123</li>
                                    <li><strong>Date of Birth:</strong> January 1, 1990</li>
                                </ul>
                            </div>
                            <button class="update-profile-btn">Update Profile</button>
                        </div>
                    </div>
                </section>
                <section class="password-section">
                    <hr />
                    <h2 class="section-heading">Update Password</h2>

                    <div>
                        <form class="password-form">
                            <div class="form-group">
                                <label for="current-password">Current Password</label>
                                <input type="password" id="current-password" name="current-password" required />
                            </div>
                            <div class="form-group">
                                <label for="new-password">New Password</label>
                                <input type="password" id="new-password" name="new-password" required />
                            </div>
                            <div class="form-group">
                                <label for="confirm-password">Confirm Password</label>
                                <input type="password" id="confirm-password" name="confirm-password" required />
                            </div>
                            <button class="update-password-btn">Update Password</button>
                        </form>
                    </div>
                </section>
                <section class="password-section">
                    <hr />
                    <h2 class="section-heading">feedback-form</h2>

                    <div>
                        <form class="feedback-form">
                            <div class="form-group">
                                <label for="name">Topic:</label>
                                <input type="text" id="name" name="name" required />
                            </div>
                            <div class="form-group">
                                <label for="message">Message:</label>
                                <textarea id="message" name="message" required></textarea>
                            </div>
                            <button class="update-password-btn">Submit</button>
                        </form>
                    </div>
                </section>
            </div>
        </>
    );
}