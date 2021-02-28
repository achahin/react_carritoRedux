import {Alert, Button, Col, Row} from "react-bootstrap";



const ItemCarrito = ({itemCarrito, delete_item, mod_cant}) => {
  //console.log(itemCarrito);
  const {descripcion, cant, id, precio} = itemCarrito;

    return (
        <Alert>

       <Row className="justify-content-center">
           <Col md={8}>
             {descripcion}   - {cant} unidades  - pu $ {precio}  - Total : ${cant * precio}     
             </Col>
            <Col md={3}>
             <Button  variant="warning" onClick={() => mod_cant(id ,-1)} > - </Button>  { } 
             <Button  variant="warning" onClick={() => mod_cant(id,1)}  >  + </Button>  { }
            <Button  variant="danger"   onClick={() => delete_item(id)}>❌borrar </Button>
            </Col>
         </Row>
       </Alert>  )
     };

export default ItemCarrito;
