import React from "react";
import { Carousel, Badge } from "react-bootstrap";
import { carouselMovies } from "../../data/carousel";

export default function HomeCarousel() {
  // ...existing code...

  return (
    <Carousel 
      interval={3000} 
      data-bs-theme="dark"
      className="carousel-container"
    >
      {carouselMovies.map((m) => (
        <Carousel.Item key={m.id}>
          <img
            className="d-block w-100"
            src={m.poster}
            alt={m.title}
            style={{ 
              height: '700px',
              objectFit: "cover",
              width: '100%',
              filter: 'brightness(0.85)'
            }}
          />
          <Carousel.Caption
            className="text-start"
            style={{
              background: 'linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 100%)',
              borderRadius: 16,
              padding: '1.5rem 2rem',
              maxWidth: 720,
              boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
              backdropFilter: 'blur(5px)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <h3 className="mb-2" style={{ color: '#ffffff', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
              {m.title}{" "}
              <Badge bg="primary" style={{ fontSize: '0.8rem' }}>{m.genre}</Badge>{" "}
              <Badge bg="danger" style={{ fontSize: '0.8rem' }}>{m.year}</Badge>
            </h3>
            <p className="mb-0" style={{ 
              fontSize: "1rem",
              color: '#e0e0e0',
              lineHeight: '1.6',
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
            }}>
              {m.description}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}