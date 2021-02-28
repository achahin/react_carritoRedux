import { Alert, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";



const Item = ({ item, add_producto }) => {
    //hook para la cantidad
    const [cant, setCant] = useState(0);
   
    const changeCant=(e) =>{
        setCant(e.target.value);
    }

    const agregar = () => {
         if (cant > 0) {
          add_producto(item, cant);
          alert('Producto agregado al carrito: ' +  item.descripcion + '  ' + cant + ' unidades');
          setCant(0);  //vuelvo a setear la cantidad a 0 luego de enviarla
         }

    }

    return (
        <Alert key={item.id} variant={"secondary"}>
            <Row className="justify-content-between">
                <Col md={6}>
                    {item.descripcion}
                </Col>
                <Col md={3}>Agregar Cant. <input name="cantidad" type="number"  value={cant} min="0" max="100" className="inputInteger" onChange={changeCant}></input></Col>
                <Col md={3}>
                <Button variant="outline-danger" id={item.id} onClick={agregar} >agregar</Button>
                   
                </Col>
            </Row>
        </Alert>
    );
};

export default Item;
