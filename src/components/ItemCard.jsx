import {useState}from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import '../css/card.css';
import ProductContent from './home/ProductContent';


const ItemCard = ({nome, valor, image, description, pharmas}) => {
   const [detalhar, setDetalhar] = useState(false)
    
    function detalharItem(event) {
      event.preventDefault();
        setDetalhar(true)
    }


    let callDetailOff = () => {
      setDetalhar(false)
    }

    return(
        <>
        {!detalhar && ( 
            <div className="card_container card-click" onClick={detalharItem} style={{ margin: "10px" }}>
              <div>
                <Card style={{ width: "100%", padding: "5px" }}>
                  <Card.Img variant="top" src={image} className="img-fluid" />
                  <Card.Body>
                    <Card.Title>{nome}</Card.Title>
                    <Card.Text>
                    {description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
    
           
          </div>
        )}
        {detalhar && (
          // <div className='card-click' onClick={detalharItem}>
              <ProductContent nome={nome} valor={valor} image={image} description={description} pharmas={pharmas} callDetailOff={callDetailOff}/>
          // </div>
            
        )}
        </>
    )
}
export default ItemCard