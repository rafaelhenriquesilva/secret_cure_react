import {} from 'react'
import '../css/style.css'
import Card from 'react-bootstrap/Card';
import CardHome from '../components/CardHome'
import ProductContent from '../components/home/ProductContent'
import "bootstrap/dist/css/bootstrap.min.css";

import healthImage from '../assets/carouselHealthImage.png'

function Home () {
    return (
        <>
            <img src={healthImage} alt="" id='displayed' className="img-fluid"/>
            {/* <Card>
                <Card.Header>
                    <Card.Title>Em Destaques</Card.Title>
                </Card.Header>
                <Card.Body>
                    <CardHome products={productsMock.destaques} />
                </Card.Body>
            </Card> */}
        </>
    )
}
export default Home