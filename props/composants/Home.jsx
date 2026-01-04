import "./Home.css"; 
import { Button } from "react-bootstrap";

const Home = () => {
  return (
    <div className="home-card">
      <div className="image-container">
        <img
          src="https://cdn.pixabay.com/photo/2015/11/23/11/57/hot-chocolate-1058197_1280.jpg"
          alt="home"
          className="image"
        />
        <div className="card-overlay">
          <h1 className="titre-choco">Bienvenue chez ChocoDelice 🍫</h1> 
          <p className="intro-choco">
            Découvrez l’univers gourmand du chocolat artisanal tunisien.<br />
            Tablettes fondantes, truffes raffinées et pralinés croquants,<br />
            préparés avec passion pour éveiller vos papilles.
          </p>
          <p className="price">À partir de 7 TND</p>
          <Button className="button">Commander</Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
