import { Card, Button, Badge, ToastContainer, Toast } from 'react-bootstrap';
import { useState } from 'react';
import './MovieCard.css';

export default function MovieCard({ img, title, text, genre, year, country, duration }) {
  const [showToast, setShowToast] = useState(false);

  const handleAddFav = () => {
    let favs = JSON.parse(localStorage.getItem('favourites')) || [];
    favs.push(title);
    localStorage.setItem('favourites', JSON.stringify(favs));
    setShowToast(true);
  };

  return (
    <>
      <Card className="h-100 movie-card">
        <Card.Img variant="top" src={img} alt={title} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text.substring(0, 60)}...</Card.Text>
          <p><Badge bg="info">{genre}</Badge></p>
          <p>{year} • {country} • {duration} min</p>
          <div className="d-flex justify-content-between">
            <Button variant="primary">View Details</Button>
            <Button variant="outline-warning" onClick={handleAddFav}>
              Add to Favourites
            </Button>
          </div>
        </Card.Body>
      </Card>

      <ToastContainer position="bottom-end">
        <Toast
          show={showToast}
          onClose={() => setShowToast(false)}
          delay={2000}
          autohide
          bg="success"
        >
          <Toast.Body className="text-white">Added to favourites!</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
}
