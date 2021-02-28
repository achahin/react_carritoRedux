import { Col, Container, Row } from 'react-bootstrap'
import { connect } from "react-redux";
import { actions } from "./../../redux/actions/carrito";
import Item from './../Item'


//datos de productos
//import dbProductos from "./../../db/products.json"; //json con productos posibles

const Listado = ({ dispatch, Carrito: {dbProductos, carrito}}) => {
    
       
       const add_producto = (item, cant) => {
        //si ya exise el producto en el carrito, actulizo cantidad
        (carrito.findIndex(itemCarrito => itemCarrito.id === item.id) >=0)?
              dispatch({ type: actions.ADD_DEC_CANT, payload: { id: item.id, cant: cant } }):
              //agrego producto con cantidad
             dispatch({ type: actions.ADD_PROD, payload: { item: item, cant: cant } });
        }
     

    return (
        <Container className="containerListado ">
            <Row>
                <Col>
                    <h3>Productos disponibles</h3>

                    {dbProductos.length ? (
                        dbProductos.map((item) => (
                            <div key={item.id}>
                                <Item item={item} add_producto={add_producto} />
                            </div>
                        ))
                    ) : (
                            <h4>No hay productos</h4>
                        )}
                </Col>
            </Row>
        </Container>
    );
};

const mapStateToProps = ({Carrito} )=> {
    return ({Carrito});



};
export default connect(mapStateToProps)(Listado);
