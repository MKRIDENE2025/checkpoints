import { Row, Container, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import FilmCard from './FilmCard';  

const FilmList = () => {
  const films = useSelector((state) => state.films.films);

  return (
    <Container>
      <Row>
        {films.map((film) => (
          <Col key={film.id} md={4}>
            <FilmCard film={film} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FilmList;
