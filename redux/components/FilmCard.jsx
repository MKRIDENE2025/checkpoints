import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { removeFilm, editFilm } from "../features/FilmSlice";

const FilmCard = ({ film }) => {
  const dispatch = useDispatch();
    
  return (
    <Card style={{ width: "18rem", margin: "1rem" }}>
      <Card.Img variant="top" src={film.posterURL} />   
        <Card.Body>
        <Card.Title>{film.title}</Card.Title>
        <Card.Text>{film.description}</Card.Text>
        <Card.Text>Rating: {film.rating}/5</Card.Text>
        <Button variant="danger" onClick={() => dispatch(removeFilm(film.id))}>
          Delete
        </Button>
<Button
  variant="warning"
  className="ms-2"
  onClick={() =>
    dispatch(
      editFilm({
        id: film.id,
        title: film.title + " (Edited)",
        description: film.description,
        rating: film.rating,
        posterURL: film.posterURL,
      })
    )
  }
>
  Edit
</Button>

        </Card.Body>
    </Card>
    );
};
export default FilmCard;