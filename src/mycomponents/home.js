import React from 'react'
import ai from '../images/ai.jpg';
import appdev from '../images/appdev.jpeg';
import data_science from '../images/data_science.jpg';
import webd from '../images/webd.webp';
export const Homepage = () => {
    return (
        <>
            <section className="main-section">
                <div className="main-section-content">
                    <h1 className="main-section-heading">Learning is the Key to Success</h1>
                    <div className="main-section-quote">
                        <p>"Education is the passport to the future, for tomorrow belongs to those who prepare for it today."</p>
                    </div>
                    <div className="main-section-search">
                        <input type="text" placeholder="Search for courses" />
                        <button>Search</button>
                    </div>
                </div>
                <div className="main-section-image">
                    <img src="https://oncampus.sjny.edu/wp-content/uploads/2017/12/tips-for-studying.jpg" alt="Study Tips" />
                </div>
            </section>
            <section className="stream-section">
                <div className="stream-section-heading">
                    <h2>Explore Different Streams</h2>
                </div>
                <div className="stream-cards-container">
                    <div className="stream-card">
                        <img src={data_science} alt="Data Science" />
                        <div className="stream-card-content">
                            <h3 className="stream-card-title">Data Science</h3>
                            <p className="stream-card-description">Learn the art of analyzing and interpreting complex data sets.</p>
                        </div>
                    </div>
                    <div className="stream-card">
                        <img src={ai} alt="Artificial Intelligence" />
                        <div className="stream-card-content">
                            <h3 className="stream-card-title">Artificial Intelligence</h3>
                            <p className="stream-card-description">Discover the world of intelligent machines and algorithms.</p>
                        </div>
                    </div>
                    <div className="stream-card">
                        <img src={webd} alt="Web Development" />
                        <div className="stream-card-content">
                            <h3 className="stream-card-title">Web Development</h3>
                            <p className="stream-card-description">Build dynamic websites and web applications using modern technologies.</p>
                        </div>
                    </div>
                    <div className="stream-card">
                        <img src={appdev} alt="Mobile App Development" />
                        <div className="stream-card-content">
                            <h3 className="stream-card-title">Mobile App Development</h3>
                            <p className="stream-card-description">Create powerful mobile applications for iOS and Android platforms.</p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}
