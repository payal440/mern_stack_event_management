import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-header">
          <h4 className="subtitle">EVENTS</h4>
          <h2 className="title">ABOUT US</h2>
        </div>
        
        <div className="about-content">
          <p className="about-description">
            Welcome to our premier event management platform. We specialize in creating
            memorable experiences through expertly planned and flawlessly executed events.
          </p>

          <h2 className="services-title">Our Services</h2>
          
          <div className="services-grid">
            <div className="service-card">
              <h3>Corporate Events</h3>
              <p>Conferences and seminars</p>
            </div>

            <div className="service-card">
              <h3>Weddings</h3>
              <p>Ceremonies and receptions</p>
            </div>

            <div className="service-card">
              <h3>Cultural Events</h3>
              <p>Festivals and celebrations</p>
            </div>

            <div className="service-card">
              <h3>Product Events</h3>
              <p>Launches and exhibitions</p>
            </div>
          </div>

          <div className="private-events">
            <div className="service-card">
              <h3>Private Events</h3>
              <p>Parties and social gatherings</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;