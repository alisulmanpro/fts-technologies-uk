import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards({
     title, description, image
}) {
  return (
    <Card style={{ width: '20rem', border: "1.5px solid #e0e0e0" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cards;