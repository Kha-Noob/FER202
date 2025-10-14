import { Row, Col } from 'react-bootstrap';
import { movies } from '../data/movies';
import MovieCard from '../components/Movies/MovieCard';

export default function MoviePage() {
  return (
    <div className="container mt-5">
      <h2 className="mb-3">All Movies</h2>
      <Row xs={1} md={3} className="g-4">
        {movies.map(movie => (
          <Col key={movie.id}>
            <MovieCard {...movie} img={movie.poster} text={movie.description} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
