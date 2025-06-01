import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const images = [
    '/performance-pics/performance1.jpg',
    '/performance-pics/performance2.jpg',
    '/performance-pics/performance3.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToIndex = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="home-container">
      {/* Title & Tagline */}
      <div className="home-title-with-icon">
        <h1 className="home-title">Music for a Cause</h1>
        <img src="/music-notes.png" alt="Music Notes" className="inline-music-icon" />
    </div>

      <p className="home-tagline">
        Uplifting the spirits of marginalized communities through music and performance.
      </p>

      {/* Mission Section */}
      <section className="home-section about-section">
        <h2>Our Mission</h2>
        <p>
          Music for a Cause is a student-led organization at the University of Washington that shares
          the joy of music with those who need it most. We perform for retirement homes, youth
          centers, adult care facilities, and more — bringing comfort, connection, and celebration
          through live performance.
        </p>
        <p>
          We believe music is a universal language of healing, and our members are passionate about
          using their musical talents to uplift marginalized and overlooked communities across the
          greater Seattle area.
        </p>
      </section>

      {/* Group Photo */}
      <img src="/group-photo.jpg" alt="Club Group Photo" className="group-photo" />

      {/* Join Section */}
      <section className="home-section join-section">
        <h2>Want to Join Us?</h2>
        <p>
          If you're a UW student who loves music and wants to make a difference, we'd love to meet you!
        </p>
        <Link to="/join" className="join-button">
          Join the Club
        </Link>
      </section>

      {/* Upcoming Performances */}
      <section className="home-section events-preview">
        <h2>Upcoming Performances</h2>

        <div className="event-card">
          <h3>Columbia Senior Living</h3>
          <p><strong>Date:</strong> June 14, 2025</p>
          <p><strong>Time:</strong> 2:00 PM – 3:00 PM</p>
          <p><strong>Location:</strong> Columbia City, Seattle</p>
        </div>

        <div className="event-card">
          <h3>YouthCare Orion Center</h3>
          <p><strong>Date:</strong> June 22, 2025</p>
          <p><strong>Time:</strong> 5:30 PM – 6:30 PM</p>
          <p><strong>Location:</strong> Capitol Hill, Seattle</p>
        </div>
      </section>

      {/* Photo Carousel */}
      <section className="home-section photo-carousel">
        <h2>Photo Highlights</h2>
        <div className="carousel">
          <button className="arrow left" onClick={goToPrev}>&#10094;</button>
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="carousel-image"
          />
          <button className="arrow right" onClick={goToNext}>&#10095;</button>
        </div>
        <div className="dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToIndex(index)}
            ></span>
          ))}
        </div>
      </section>

      {/* UW Credit */}
      <p className="home-uw-credit">
        Proudly representing the University of Washington
      </p>
    </div>
  );
}

export default Home;



