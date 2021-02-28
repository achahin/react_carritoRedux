import { Col, Container, Row } from 'react-bootstrap'
import { connect } from "react-redux";
import {useState} from 'react';

import Total from "./Total";

import ItemCarrito from './../ItemCarrito';

import { actions } from "./../../redux/actions/carrito";;

const DetalleCarrito = ({ dispatch, Carrito: { carrito } }) => {
   
    //hook
    const [total, setTotal] = useState(0);

    const mod_cant = (id, cant) => {
        console.log(id + '  ' + cant);
        dispatch({ type: actions.ADD_DEC_CANT, payload: { id:id, cant: cant } });
         //limpio el total, despues de actuliazar carrito
         setTotal(0) 
    };
   
    const delete_item = (id) => {
        dispatch({ type: actions.DELETE, payload: { id: id} });
        //limpio el total, despues de actuliazar carrito
        setTotal(0); 
    };
    
    const actualiza_total = () => {
       const totalCarrito = carrito.reduce((total, valorActual) => {
             return total+parseInt(valorActual.cant)*parseFloat(valorActual.precio);
      },0);      
      setTotal(totalCarrito);
    };
    
    return (
        <>
        <Container className="containerListado ">
            <Row>
                <Col>
                    <h3>Detalle Carrito</h3>
                         {carrito.length ? (
                        carrito.map((itemCarrito) => (
                            <div key={itemCarrito.id}>
                                
                                <ItemCarrito  itemCarrito={itemCarrito} delete_item={delete_item}
                                               mod_cant={mod_cant}/>
                            </div>
                          ))
                         ) : (
                            <h4>No hay productos en carrito</h4>
                        )}
                </Col>
            </Row>
           </Container>
           <div className="text-center">
               <Total  total={total} actualiza_total={actualiza_total} />
           </div>
        </>

    );
};

const mapStateToProps = (state) => {
    return state;
};
export default connect(mapStateToProps)(DetalleCarrito);
