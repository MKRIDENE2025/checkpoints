import {Form, Button, Container} from 'react-bootstrap';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addFilm} from '../features/FilmSlice';  

const AddFilm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState(1);
    const [posterURL, setPosterURL] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        const newFilm = {
            id: Date.now(),
            title,
            description,
            rating: parseFloat(rating),
            posterURL
        };
        dispatch(addFilm(newFilm));
        setTitle('');
        setDescription('');
        setRating(1);
        setPosterURL('');
    };  
    return (
        <Container>
        <h2 className="my-4">Add a New Film</h2>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control 
                type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} required />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                as="textarea"
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)} required />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Rating</Form.Label>
                <Form.Control
                type="number"
                value={rating}
                onChange={(e) => setRating(e.target.value)} 
                    required />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Poster URL</Form.Label>
                <Form.Control
                type="text"
                value={posterURL}
                onChange={(e) => setPosterURL(e.target.value)} required />
            </Form.Group>
            <Button variant="primary" type="submit">
                Add Film    
            </Button>
        </Form>
        </Container>
    );
}
export default AddFilm;