import { } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import dipirona from '../../assets/dipirona.png'
import '../../css/style.css'
import { useState } from 'react'
import BasicAccordion from '../BasicAccordion';
import notify from '../utils/Notification';
import Card from 'react-bootstrap/Card';

function ProductContent({ nome, valor, image, description, pharmas, callDetailOff }) {
    const [contador, setContador] = useState(0)
    const [pharmSelected, setPharmSelected] = useState();
    const incrementar = () => setContador(contador + 1)
    const decrementar = () => setContador(contador - 1)


    const adicionarProduto = (event) => {
        event.preventDefault();
        let product = {
            nome: nome,
            image: image,
            description: description
        }

        if (contador <= 0) {
            notify("error", "Quantidade deve ser maior que 0")
            return;
        }

        product.quantity = contador;

        if (!pharmSelected) {
            notify("error", "Obrigatório selecionar a farmácia")
            return;
        }

        let pharmUpdate = pharmas.find(pharma => pharma.name == pharmSelected)

        product.pharm = pharmUpdate;

        // Calculando total
        product.totalValue = (parseInt(product.quantity) * parseFloat(pharmUpdate.updateValue)).toFixed(2)
        product.unitValue = parseFloat(pharmUpdate.updateValue).toFixed(2)
        console.info(`Product => ${JSON.stringify(product)}`)

        notify("success", "Adicionado com sucesso!");

        localStorageControl(product);
        setPharmSelected()
        setContador(0)
        callDetailOff();

    }

    const localStorageControl = (product) => {
        let products = JSON.parse(localStorage.getItem("products")) || [];

        products.push(product);

        localStorage.setItem("products", JSON.stringify(products));
    }

    const childToParent = (event) => {
        if (event.target.type === "radio" && event.target.checked) {
            const selectedPharmacy = event.target.value;
            console.info(`Farmácia selecionada: ${selectedPharmacy}`);
            setPharmSelected(selectedPharmacy);
        }
    }

    return (
        <>

            <Card>
                <Card.Body>
                    <Container>

                        <Row>
                            <button onClick={callDetailOff} className='closeButton'>X</button>
                            <Col>
                                <img src={image} alt="" width="300vw" />
                            </Col>
                            <Col>
                                <h2 >{nome} </h2>
                                {/* <p className='preco'>Por: <span id='destacado_preco'>R$ {valor}</span></p>
                <p className='preco'>De: <strong>Farmácia A</strong></p> */}
                                <button onClick={decrementar} className='botao'>-</button>
                                <button className="btn btn-dark my-3" id='contador'>
                                    {contador}
                                </button>
                                <button onClick={incrementar} className='botao'>+</button>

                                <a href="" className="btn btn-dark my-3" id='botao_carrinho' onClick={adicionarProduto}>
                                    Adicionar ao carrinho
                                </a>
                                <p>{description}</p>
                            </Col>
                        </Row>

                    </Container>
                    <BasicAccordion pharmas={pharmas} childToParent={childToParent} />
                </Card.Body>
            </Card>


        </>
    )
}
export default ProductContent