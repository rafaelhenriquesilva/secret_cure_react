import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Importe o useParams do react-router-dom
import "bootstrap/dist/css/bootstrap.min.css";
import '../css/card.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemCard from './ItemCard';
import ProductService from '../services/Product.service';

const CardHome = ({complementUrl}) => {

    const [products, setProducts] = useState([]);
    const [maxProducts, setMaxProducts] = useState(0);
    const [columnsPerRow, setColumnsPerRow] = useState(0);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const productService = new ProductService({ complementUrl });

                const data = await productService.getProduct();
                setProducts(data.data);
                setMaxProducts(data.data.length);
                setColumnsPerRow(data.data.length >= 3 ? 4 : 5);
            } catch (error) {
                console.log(error);
            }
        }

        fetchProducts(); // Não precisa verificar products.length === 0 aqui

    }, [complementUrl]);

    return (
        <Container>
            {maxProducts > 0 ? (
                <Row>
                    {products.map((item, index) => (
                        <Col key={index} sm={columnsPerRow}>
                            <ItemCard nome={item.nome} valor={item.valor} image={item.image} description={item.description} pharmas={item.pharmas} />
                        </Col>
                    ))}
                </Row>
            ) : (
                <p>Nenhum item para exibir</p>
            )}
        </Container>
    );
}

export default CardHome;
