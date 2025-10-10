import React, { useState } from "react";
import { Card, Button, Badge, Row, Col, Toast, Modal } from "react-bootstrap";
import { movies } from "../../data/movies";
import "./MovieCard.css";

export default function MovieCard() {
  const [showToast, setShowToast] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [favourites, setFavourites] = useState(
    JSON.parse(localStorage.getItem("favourites")) || []
  );

  const handleAddFavourite = (movie) => {
    const updated = [...favourites, movie];
    setFavourites(updated);
    localStorage.setItem("favourites", JSON.stringify(updated));
    setShowToast(true);
  };

  const handleViewDetails = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div className="mt-4">
      <Row xs={1} md={2} lg={3} className="g-4">
        {movies.map((m) => (
          <Col key={m.id}>
            <Card className="movie-card h-100">
              <div className="movie-poster">
                <Card.Img
                  variant="top"
                  src={m.poster}
                  alt={m.title}
                />
                <div className="movie-overlay">
                  <h5>{m.title}</h5>
                  <Badge bg="primary" className="me-2">{m.genre}</Badge>
                  <Badge bg="secondary">{m.year}</Badge>
                </div>
              </div>
              
              <Card.Body className="movie-content">
                <Card.Text className="movie-description">
                  {m.description.length > 100
                    ? m.description.substring(0, 100) + "..."
                    : m.description}
                </Card.Text>
                <div className="movie-info">
                  <p><i className="far fa-clock me-2"></i>{m.duration} mins</p>
                  <p><i className="fas fa-globe me-2"></i>{m.country}</p>
                </div>
                <div className="movie-actions">
                  <Button
                    variant="success"
                    onClick={() => handleAddFavourite(m)}
                    className="btn-favourite"
                  >
                    <i className="fas fa-heart me-2"></i>
                    Add to Favourites
                  </Button>
                  <Button
                    variant="outline-primary"
                    onClick={() => handleViewDetails(m)}
                    className="btn-details"
                  >
                    <i className="fas fa-info-circle me-2"></i>
                    View Details
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Toast
        show={showToast}
        onClose={() => setShowToast(false)}
        delay={2000}
        autohide
        className="toast-notification"
      >
        <Toast.Body>
          <i className="fas fa-check-circle me-2"></i>
          Added to favourites!
        </Toast.Body>
      </Toast>

      <Modal 
        show={!!selectedMovie} 
        onHide={() => setSelectedMovie(null)}
        centered
        className="movie-modal"
      >
        {selectedMovie && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedMovie.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img
                src={selectedMovie.poster}
                alt={selectedMovie.title}
                className="modal-poster"
              />
              <div className="modal-info">
                <Badge bg="primary" className="mb-2">{selectedMovie.genre}</Badge>
                <p className="description">{selectedMovie.description}</p>
                <div className="details">
                  <p><strong>Year:</strong> {selectedMovie.year}</p>
                  <p><strong>Country:</strong> {selectedMovie.country}</p>
                  <p><strong>Duration:</strong> {selectedMovie.duration} mins</p>
                </div>
              </div>
            </Modal.Body>
          </>
        )}
      </Modal>
    </div>
  );
}