import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import { AiFillDelete } from 'react-icons/ai';
import Card from 'react-bootstrap/Card';
import notify from '../components/utils/Notification';
import '../css/style.css'

const Carrinho = () => {
    const [products, setProducts] = useState([]);
    const [contador, setContador] = useState(0);
const [total, setTotal] = useState(0)
    useEffect(() => {
        // Load products from localStorage when the component loads
        const savedProducts = JSON.parse(localStorage.getItem('products')) || [];
        setProducts(savedProducts);
        calculateTotalValue(savedProducts)
    }, []);

    const incrementar = (event) => {
        // setContador(contador + 1);
        event.preventDefault();
        findProduct(event.target.value, '+')
    };

    const decrementar = (event) => {
        // setContador(contador - 1);
        event.preventDefault();
        findProduct(event.target.value, '-')
    };

    const findProduct = (productName, action) => {
        let newProducts = []
        for (let product of products) {
            if((product.nome == productName) && action == '+'){
                product.quantity = product.quantity + 1
            } else if((product.nome == productName) && action == '-'){
                if ((parseInt(product.quantity) - 1)  < 1) {
                    notify("error", "Quantidade deve ser no mínimo 1")
                    return;
                }
        
                product.quantity = product.quantity -1
                
            }
            product.totalValue = (parseInt(product.quantity) * parseFloat(product.unitValue)).toFixed(2)
            
            newProducts.push(product)
        }



        setProducts([])
        setProducts(newProducts)
        localStorage.setItem("products", JSON.stringify(newProducts));
        calculateTotalValue(newProducts)
    }

    function calculateTotalValue(newProducts) {
        let total = 0
        for(let product of newProducts) {
            total = total + parseFloat(product.totalValue)
        }
        setTotal(total.toFixed(2))
    }

    const removeProduct = (productName) => {
        // Filter the products array to remove the product with the given name
        const updatedProducts = products.filter((product) => product.nome !== productName);
        setProducts(updatedProducts);
        // Update localStorage to save the changes
        localStorage.setItem('products', JSON.stringify(updatedProducts));
        calculateTotalValue(updatedProducts)
    };
    function finalizarCompra(event) {
        event.preventDefault()
        if(products && products.length > 0) {
            setProducts([])
            localStorage.setItem("products", JSON.stringify([]));
            setTotal(0)
            notify("success", "Compra finalizada com sucesso")
        }
        else {
            notify("error", "Não há produtos")
        }
       
       
    }

    return (
        <Card>
            <Card.Header>
                <Card.Title>Meus Pedidos</Card.Title>
            </Card.Header>
            <Card.Body>
                <div className="container_carrinho">
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th className="titulo_table">#</th>
                                <th className="titulo_table">Produtos</th>
                                <th className="titulo_table">QTD</th>
                                <th className="titulo_table">Farmácia</th>
                                <th className="titulo_table">Valor unidade</th>
                                <th className="titulo_table">Sub Total</th>
                                <th className="titulo_table">Remover</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.length > 0 ? (
                                products.map((product, index) => (
                                    <tr key={index}>
                                        <td className="conteudo_table">{index + 1}</td>
                                        <td className="conteudo_table">
                                            <img src={product.image} width="100" alt={product.nome} /> {product.nome}
                                        </td>
                                        <td className="conteudo_table">
                                            <button onClick={decrementar} value={product.nome} className="botao">-</button>
                                            <span className="btn btn-dark my-3" id="contador">
                                                {product.quantity}
                                            </span>
                                            <button onClick={incrementar} value={product.nome} className="botao">+</button>
                                        </td>
                                        <td className="conteudo_table">{product.pharm.name}</td>
                                        <td className="conteudo_table">R$ {product.unitValue}</td>
                                        <td className="conteudo_table">R$ {product.totalValue}</td>
                                        <td className="conteudo_table">
                                            <AiFillDelete size={30} onClick={() => removeProduct(product.nome)} />
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={6}>Nenhum item para exibir</td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </div>

                <div className="container_finalizaPedido">
                    <Container>
                        <Row>
                            <Col>
                                <p className="paragrafo_total">Total Produtos: </p>
                                <p>
                                    <span className="destacado_preco">R$ {total}</span>
                                </p>
                            </Col>
                            <Col>
                                <a href="" className="btn btn-dark my-3" id="botao_finalizaCompra" onClick={finalizarCompra}>
                                    Finalizar compra
                                </a>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Card.Body>
        </Card>
    );
};

export default Carrinho;
