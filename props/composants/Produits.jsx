import Card from "./Card";
import { Container, Row, Col } from "react-bootstrap";
import './Produits.css'
function Produits() {
  const produits = [
    {
      id: 1,
      name: "Tablette Chocolat Noir",
      description: "Chocolat intense 70% cacao",
      price: 8,
      image: "https://cdn.pixabay.com/photo/2015/05/24/12/58/schogetten-781746_1280.jpg"
    },
    {
      id: 2,
      name: "Praliné Amandes",
      description: "Délicieux praliné aux amandes grillées",
      price: 12,
      image: "https://cdn.pixabay.com/photo/2023/12/18/11/05/chocolate-8455786_1280.jpg"
    },
    {
      id: 3,
      name: "Truffes Gourmandes",
      description: "Fondantes et riches en cacao",
      price: 15,
      image: "https://cdn.pixabay.com/photo/2016/10/13/11/44/chocolates-1737503_1280.jpg"
    },
    {
      id: 4,
      name: "Chocolat au Lait",
      description: "Doux et crémeux, parfait pour les enfants",
      price: 7,
      image: "https://cdn.pixabay.com/photo/2019/11/03/14/29/milk-4598823_1280.jpg"
    }
  ];

  return (
    <Container className="produit">
      <h2 className="h2">
        🍫 Nos Chocolats Gourmands
      </h2>

      <Row className="row">
        {produits.map((produit) => (
          <Col
            key={produit.id}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className="d-flex justify-content-center mb-4"
          >
            <Card
              name={produit.name}
              description={produit.description}
              price={produit.price}
              image={produit.image}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Produits;
