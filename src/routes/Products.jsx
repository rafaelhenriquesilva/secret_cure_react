import React from 'react';
import CardHome from '../components/CardHome';
import '../css/style.css';
import Card from 'react-bootstrap/Card';

const Products = ({ nome, complementUrl }) => {

  return (
    <>
      <Card>
        <Card.Header>
          <Card.Title>{nome}</Card.Title>
        </Card.Header>
        <Card.Body>
          <CardHome complementUrl={complementUrl} />
        </Card.Body>
      </Card>
    </>
  );
}

export default Products;
